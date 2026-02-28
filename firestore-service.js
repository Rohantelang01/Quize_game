// firestore-service.js
// Firestore se questions load karne ke liye

import { db } from './firebase-config.js';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

/**
 * Firestore se sabhi questions ko fetch karna aur flatten karna
 * @returns {Promise<Array>} Flattened questions array
 */
export async function loadQuestionsFromFirestore() {
  try {
    console.log("📥 Loading questions from Firestore...");
    
    const querySnapshot = await getDocs(collection(db, "subjects"));
    const rawData = [];
    
    querySnapshot.forEach((docSnap) => {
      rawData.push(docSnap.data());
    });
    
    console.log(`✅ Fetched ${rawData.length} subjects from Firestore`);
    
    // Data ko flatten karna (same logic jaise data.js mein tha)
    const flatList = [];
    rawData.forEach(subObj => {
      if(!subObj.subtopics) return;
      
      subObj.subtopics.forEach(subTopObj => {
        if(!subTopObj.questions) return;
        
        subTopObj.questions.forEach(q => {
          const optsArray = [];
          if(q.options.A) optsArray.push({ key: 'A', text: q.options.A });
          if(q.options.B) optsArray.push({ key: 'B', text: q.options.B });
          if(q.options.C) optsArray.push({ key: 'C', text: q.options.C });
          if(q.options.D) optsArray.push({ key: 'D', text: q.options.D });

          flatList.push({
            id: q.question_id,
            subject: subObj.subject,
            chapter: subObj.chapter,
            section: subObj.section,
            topic: subObj.topic,
            subtopic: subTopObj.subtopic,
            q: q.question,
            optionsData: optsArray,
            ansKey: q.correct_answer, 
            exp: q.explanation,
            exam: q.exam,
            diff: q.difficulty,
            py: q.prev_year ? q.prev_year.asked : false
          });
        });
      });
    });
    
    console.log(`✅ Flattened to ${flatList.length} questions`);
    return flatList;
    
  } catch (error) {
    console.error("❌ Error loading questions from Firestore:", error);
    alert("❌ Firestore se data load nahi ho saka. Check browser console.");
    return [];
  }
}

/**
 * Naya question add karna Firestore mein
 * @param {String} subjectId - Subject ka document ID
 * @param {String} subtopicId - Subtopic ka document ID
 * @param {Object} questionData - Question object
 */
export async function addQuestion(subjectId, subtopicId, questionData) {
  try {
    const subjectRef = doc(db, "subjects", subjectId);
    // Note: Firestore me nested collections handle karne hain - ye simplified version hai
    // Production mein proper subcollections setup karna chahiye
    console.log("✅ Question added (logic to be completed)");
  } catch (error) {
    console.error("❌ Error adding question:", error);
  }
}

/**
 * Question delete karna
 * @param {String} questionId - Question ID
 */
export async function deleteQuestion(questionId) {
  try {
    // Implementation will depend on exact Firestore structure
    console.log("✅ Question deleted (logic to be completed)");
  } catch (error) {
    console.error("❌ Error deleting question:", error);
  }
}

/**
 * Question update karna
 * @param {String} questionId - Question ID
 * @param {Object} updatedData - Updated question data
 */
export async function updateQuestion(questionId, updatedData) {
  try {
    // Implementation will depend on exact Firestore structure
    console.log("✅ Question updated (logic to be completed)");
  } catch (error) {
    console.error("❌ Error updating question:", error);
  }
}
