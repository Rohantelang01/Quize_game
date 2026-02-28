// firebase-config.js
// Firebase Configuration aur Initialization

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtcwji9ER0Gg0iqcSPTNAMTJOEqbys854",
  authDomain: "quize-game-38978.firebaseapp.com",
  projectId: "quize-game-38978",
  storageBucket: "quize-game-38978.firebasestorage.app",
  messagingSenderId: "380606437578",
  appId: "1:380606437578:web:74d9e896f9030317437c33",
  measurementId: "G-QDEN9X4KLW"
};

// Firebase initialize karna
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("✅ Firebase Initialized Successfully!");

// Export for other modules
export { db, app };
