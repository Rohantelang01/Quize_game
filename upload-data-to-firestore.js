// upload-data-to-firestore.js
// Ye script bulk upload karta hai data.js ke data ko Firestore mein
// Browser console mein run kar sakte ho

import { db } from './firebase-config.js';
import { collection, addDoc, writeBatch } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Pehle data.js se RAW_DATA import karna padega
// <script src="data.js"></script> temporarily add karna padega HTML mein

/**
 * Bulk upload karna - data.js se Firestore ko
 */
export async function uploadDataToFirestore() {
  // Check if RAW_DATA exists
  if (typeof RAW_DATA === 'undefined') {
    console.error("❌ RAW_DATA not found. Make sure data.js is loaded before uploading.");
    alert("❌ data.js loaded nahi hua. Pehle temp mein <script src='data.js'></script> add karo");
    return;
  }

  console.log("📤 Starting bulk upload to Firestore...");
  console.log(`📊 Total subjects to upload: ${RAW_DATA.length}`);

  const subjectsRef = collection(db, "subjects");
  
  try {
    for (let i = 0; i < RAW_DATA.length; i++) {
      const subject = RAW_DATA[i];
      console.log(`⏳ Uploading subject ${i + 1}/${RAW_DATA.length}: ${subject.subject}`);
      
      // Add document to Firestore
      const docRef = await addDoc(subjectsRef, subject);
      console.log(`✅ Subject uploaded with ID: ${docRef.id}`);
    }
    
    console.log("✅ All data uploaded successfully to Firestore!");
    alert("✅ Sab data Firestore mein upload ho gaya!");
    
  } catch (error) {
    console.error("❌ Error uploading data:", error);
    alert(`❌ Upload mein error: ${error.message}`);
  }
}

/**
 * Only upload a specific number of subjects (for testing)
 */
export async function uploadTestData(count = 1) {
  if (typeof RAW_DATA === 'undefined') {
    alert("❌ data.js loaded nahi hua");
    return;
  }

  const subjectsRef = collection(db, "subjects");
  console.log(`📤 Uploading ${count} test subject(s)...`);
  
  try {
    for (let i = 0; i < Math.min(count, RAW_DATA.length); i++) {
      const subject = RAW_DATA[i];
      const docRef = await addDoc(subjectsRef, subject);
      console.log(`✅ Test subject ${i + 1} uploaded: ${docRef.id}`);
    }
    alert(`✅ ${count} test subject(s) uploaded!`);
  } catch (error) {
    console.error("❌ Error:", error);
    alert(`❌ Error: ${error.message}`);
  }
}

/**
 * Check existing data in Firestore
 */
export async function checkFirestoreData() {
  try {
    const { getDocs, collection } = await import(
      "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"
    );
    
    const subjectsRef = collection(db, "subjects");
    const snapshot = await getDocs(subjectsRef);
    
    console.log(`📊 Total subjects in Firestore: ${snapshot.size}`);
    
    let totalQuestions = 0;
    snapshot.forEach((doc) => {
      const data = doc.data();
      let questionCount = 0;
      
      if (data.subtopics) {
        data.subtopics.forEach(st => {
          if (st.questions) {
            questionCount += st.questions.length;
          }
        });
      }
      
      totalQuestions += questionCount;
      console.log(`  ├─ ${data.subject}: ${questionCount} questions`);
    });
    
    console.log(`\n📈 Total questions in database: ${totalQuestions}`);
    return { subjectCount: snapshot.size, totalQuestions };
    
  } catch (error) {
    console.error("❌ Error checking data:", error);
  }
}

// Export functions so they can be called from browser console
window.FirebaseUpload = {
  uploadAll: uploadDataToFirestore,
  uploadTest: uploadTestData,
  checkData: checkFirestoreData
};

console.log("✅ Upload functions available!");
console.log("Usage in browser console:");
console.log("  - FirebaseUpload.uploadTest(1)  // Test 1 subject");
console.log("  - FirebaseUpload.uploadAll()    // Upload all data");
console.log("  - FirebaseUpload.checkData()    // Check Firestore data");
