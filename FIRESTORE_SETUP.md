// FIRESTORE SETUP GUIDE
// =====================

// Your Firestore should be structured like this:

/*
Firestore Database Structure:
============================

Collection: "subjects"
  ├── Document: auto-generated ID
  │   ├── subject: "History"
  │   ├── subject_id: "SUB_1"
  │   ├── chapter: "Indian History"
  │   ├── chapter_id: "CHA_1"
  │   ├── section: "Ancient India"
  │   ├── section_id: "SEC_1"
  │   ├── topic: "Ancient India Overview"
  │   ├── topic_id: "TOP_1"
  │   └── subtopics: [
  │       {
  │         "subtopic": "Historical Sources",
  │         "subtopic_id": "STOP_1",
  │         "questions": [
  │           {
  │             "question_id": "Q001",
  │             "question": "Who among the following is known as...",
  │             "options": {
  │               "A": "Leopold von Ranke",
  │               "B": "Hegel",
  │               "C": "Herodotus",
  │               "D": "Karl Marx"
  │             },
  │             "correct_answer": "C",
  │             "explanation": "Herodotus was a Greek historian...",
  │             "difficulty": "easy",
  │             "exam": "SSC_MTS",
  │             "prev_year": {
  │               "asked": true,
  │               "details": "SSC MTS 2017"
  │             },
  │             "tags": ["ancient_history", "historians"]
  │           },
  │           // More questions...
  │         ]
  │       },
  │       // More subtopics...
  │     ]
  │
  └── More subject documents...


STEPS TO UPLOAD DATA TO FIRESTORE:
==================================

OPTION 1: Use Firebase Console (Recommended for testing)
---------
1. Go to: https://console.firebase.google.com/
2. Select project: "quizegame-e565e"
3. Go to Firestore Database section
4. Create collection named "subjects"
5. Manually add documents OR use the import feature
6. Structure should match the above format

OPTION 2: Use Firebase Admin SDK (Best for bulk import)
---------
1. Create a new Node.js script: upload-data.js
2. Add Firebase Admin SDK: npm install firebase-admin
3. Use the JSON credentials file you already have
4. Run: node upload-data.js
5. This will upload all data from data.js to Firestore in bulk

OPTION 3: Convert data.js and auto-upload
---------
1. We can create a one-time upload script
2. It reads all data from data.js
3. Automatically uploads to Firestore
4. You can use this from browser console

*/

// QUICK START - Copy-paste this in your browser console to test if Firestore is working:

`
import { db } from 'https://[Your-Domain]/firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const querySnapshot = await getDocs(collection(db, "subjects"));
console.log("Total Subjects:", querySnapshot.size);
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});
`

// ======= FIRESTORE SECURITY RULES (Set these in Console) =======
// Needed so your web app can read data:

`
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all users (so quiz can load questions)
    // Restrict writes to authenticated admin users only
    
    match /subjects/{document=**} {
      // Public read access
      allow read: if true;
      
      // Only authenticated admins can write
      allow write: if request.auth != null && 
                      request.auth.token.admin == true;
    }
  }
}
`

// To set admin role, go to:
// 1. Firebase Console -> Authentication
// 2. Select a user
// 3. Custom Claims -> Add claim:
//    - Key: "admin"
//    - Value: true
