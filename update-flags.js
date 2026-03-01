// ===================================================
// update-flags.js
// Script to add flag field to all existing questions
// Run this once to update your Firestore database
// ===================================================

import { db } from './firebase-config.js';
import { collection, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

/**
 * Add flag field and image infrastructure to all questions
 * This should be run once to update existing data
 */
export async function addFlagsAndImageFieldsToQuestions() {
  try {
    console.log("🔄 Starting update process...");
    console.log("⏳ This may take a minute depending on number of questions...");
    
    const querySnapshot = await getDocs(collection(db, "subjects"));
    
    let totalUpdated = 0;
    let totalSkipped = 0;
    
    for (const subjectDoc of querySnapshot.docs) {
      const subjectData = subjectDoc.data();
      let subjectUpdated = false;
      
      if (subjectData.subtopics && Array.isArray(subjectData.subtopics)) {
        for (let i = 0; i < subjectData.subtopics.length; i++) {
          const subtopic = subjectData.subtopics[i];
          
          if (subtopic.questions && Array.isArray(subtopic.questions)) {
            for (let j = 0; j < subtopic.questions.length; j++) {
              const question = subtopic.questions[j];
              let questionUpdated = false;
              
              // Add flag field if missing
              if (!question.flag) {
                question.flag = 'green'; // Default: mark all as clear
                questionUpdated = true;
              }
              
              // Add question image field if missing
              if (question.question_image === undefined) {
                question.question_image = null;
                questionUpdated = true;
              }
              
              // Add image fields to options if missing
              if (question.options) {
                const optionKeys = ['A', 'B', 'C', 'D'];
                optionKeys.forEach(key => {
                  const imageKey = `${key}_image`;
                  if (question.options[imageKey] === undefined) {
                    question.options[imageKey] = null;
                    questionUpdated = true;
                  }
                });
              }
              
              if (questionUpdated) {
                totalUpdated++;
                subjectUpdated = true;
              } else {
                totalSkipped++;
              }
            }
          }
        }
      }
      
      // Update the document in Firestore if any changes
      if (subjectUpdated) {
        try {
          await updateDoc(doc(db, "subjects", subjectDoc.id), subjectData);
          console.log(`✅ Updated subject: ${subjectData.subject || 'Unknown'}`);
        } catch (updateError) {
          console.error(`❌ Error updating subject ${subjectDoc.id}:`, updateError);
        }
      }
    }
    
    console.log("\n" + "=".repeat(50));
    console.log("✅ UPDATE COMPLETE!");
    console.log("=".repeat(50));
    console.log(`📊 Statistics:`);
    console.log(`   • Questions updated: ${totalUpdated}`);
    console.log(`   • Questions skipped (already had fields): ${totalSkipped}`);
    console.log(`   • Total processed: ${totalUpdated + totalSkipped}`);
    console.log("\n🎉 You can now use the flag system!");
    console.log("   • Flags default to 'green' for all questions");
    console.log("   • Students can change flags during quizzes");
    console.log("   • Image fields are ready for future use");
    
    alert(`✅ Database updated!\n\n${totalUpdated} questions updated with flag field.\n\nRefresh your page to see changes.`);
    
    return {
      success: true,
      updated: totalUpdated,
      skipped: totalSkipped,
      total: totalUpdated + totalSkipped
    };
    
  } catch (error) {
    console.error("❌ Critical Error:", error);
    alert("❌ Error updating database:\n\n" + error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Helper function: Set a specific question's flag
 * @param {String} questionId - Question ID
 * @param {String} flagLevel - 'green', 'blue', or 'red'
 */
export async function setQuestionFlag(questionId, flagLevel) {
  if (!['green', 'blue', 'red'].includes(flagLevel)) {
    console.error("Invalid flag level. Use 'green', 'blue', or 'red'");
    return false;
  }
  
  try {
    const querySnapshot = await getDocs(collection(db, "subjects"));
    
    for (const subjectDoc of querySnapshot.docs) {
      const subjectData = subjectDoc.data();
      
      if (subjectData.subtopics) {
        for (let i = 0; i < subjectData.subtopics.length; i++) {
          if (subjectData.subtopics[i].questions) {
            for (let j = 0; j < subjectData.subtopics[i].questions.length; j++) {
              if (subjectData.subtopics[i].questions[j].question_id === questionId) {
                subjectData.subtopics[i].questions[j].flag = flagLevel;
                await updateDoc(doc(db, "subjects", subjectDoc.id), subjectData);
                console.log(`✅ Question ${questionId} flagged as ${flagLevel}`);
                return true;
              }
            }
          }
        }
      }
    }
    
    console.warn(`⚠️ Question ${questionId} not found`);
    return false;
    
  } catch (error) {
    console.error("❌ Error setting flag:", error);
    return false;
  }
}

/**
 * Helper function: Bulk set flags by difficulty level
 * Sets red flag for 'hard', blue for 'medium', green for 'easy'
 */
export async function autoFlagByDifficulty() {
  try {
    console.log("🔄 Auto-flagging questions by difficulty...");
    
    const querySnapshot = await getDocs(collection(db, "subjects"));
    let updated = 0;
    
    for (const subjectDoc of querySnapshot.docs) {
      const subjectData = subjectDoc.data();
      let subjectUpdated = false;
      
      if (subjectData.subtopics) {
        for (let i = 0; i < subjectData.subtopics.length; i++) {
          if (subjectData.subtopics[i].questions) {
            for (let j = 0; j < subjectData.subtopics[i].questions.length; j++) {
              const q = subjectData.subtopics[i].questions[j];
              const difficulty = (q.difficulty || 'easy').toLowerCase();
              
              let newFlag = 'green';
              if (difficulty.includes('hard') || difficulty.includes('difficult')) {
                newFlag = 'red';
              } else if (difficulty.includes('medium') || difficulty.includes('moderate')) {
                newFlag = 'blue';
              }
              
              if (!q.flag || q.flag === 'green') {
                q.flag = newFlag;
                subjectUpdated = true;
                updated++;
              }
            }
          }
        }
      }
      
      if (subjectUpdated) {
        await updateDoc(doc(db, "subjects", subjectDoc.id), subjectData);
      }
    }
    
    console.log(`✅ Auto-flagged ${updated} questions by difficulty`);
    alert(`✅ ${updated} questions auto-flagged by difficulty level!`);
    return updated;
    
  } catch (error) {
    console.error("❌ Error auto-flagging:", error);
    alert("❌ Error: " + error.message);
    return 0;
  }
}

/**
 * Helper function: Reset all flags to green
 */
export async function resetAllFlags() {
  if (!confirm("⚠️ Are you sure? This will reset ALL question flags to green.")) {
    return false;
  }
  
  try {
    console.log("🔄 Resetting all flags to green...");
    
    const querySnapshot = await getDocs(collection(db, "subjects"));
    let updated = 0;
    
    for (const subjectDoc of querySnapshot.docs) {
      const subjectData = subjectDoc.data();
      let subjectUpdated = false;
      
      if (subjectData.subtopics) {
        for (let i = 0; i < subjectData.subtopics.length; i++) {
          if (subjectData.subtopics[i].questions) {
            for (let j = 0; j < subjectData.subtopics[i].questions.length; j++) {
              if (subjectData.subtopics[i].questions[j].flag !== 'green') {
                subjectData.subtopics[i].questions[j].flag = 'green';
                subjectUpdated = true;
                updated++;
              }
            }
          }
        }
      }
      
      if (subjectUpdated) {
        await updateDoc(doc(db, "subjects", subjectDoc.id), subjectData);
      }
    }
    
    console.log(`✅ Reset ${updated} questions to green flag`);
    alert(`✅ ${updated} questions reset to green!`);
    return updated;
    
  } catch (error) {
    console.error("❌ Error resetting flags:", error);
    alert("❌ Error: " + error.message);
    return 0;
  }
}

// Export functions to window for browser console access
window.updateAllFlags = addFlagsAndImageFieldsToQuestions;
window.setQuestionFlag = setQuestionFlag;
window.autoFlagByDifficulty = autoFlagByDifficulty;
window.resetAllFlags = resetAllFlags;

console.log("📌 Update script loaded. Available functions:");
console.log("   1. updateAllFlags() - Add flag fields to all questions");
console.log("   2. autoFlagByDifficulty() - Auto-flag based on difficulty");
console.log("   3. resetAllFlags() - Reset all flags to green");
console.log("   4. setQuestionFlag(id, level) - Set specific question flag");
