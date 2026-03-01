# 🚩 Question Flag System Guide

## Overview
This guide explains the new **3-level flag system** for marking question clarity levels, and how to prepare for future image support.

---

## 📌 Flag Levels

Each question can be marked with one of three clarity levels:

| Flag | Color | Emoji | Meaning | Use Case |
|------|-------|-------|---------|----------|
| **Green** | 🟢 | ✅ | Question completely clear | Simple, well-understood questions |
| **Blue** | 🔵 | 🔵 | Question slightly confusing | Ambiguous wording, needs clarification |
| **Red** | 🔴 | ❌ | Not understood at all | Very difficult or poorly worded |

---

## 🔧 How It Works

### 1. **In Firestore Database**

Each question now stores a `flag` field:

```javascript
{
  question_id: "q_12345",
  question: "What is the capital of India?",
  options: { A: "...", B: "...", C: "...", D: "..." },
  correct_answer: "C",
  explanation: "...",
  exam: "...",
  difficulty: "...",
  prev_year: { asked: true },
  
  // NEW FIELDS:
  flag: "green",                    // Optional: defaults to 'green' if not present
  question_image: null,             // For future: question images
  
  // Updated options with image support:
  options: {
    A: "New Delhi",
    A_image: null,                  // For future: option images
    B: "Mumbai",
    B_image: null,
    // ... same for C and D
  }
}
```

### 2. **Frontend Storage**

Flags are stored in localStorage as a JSON object:

```javascript
{
  "q_12345": "red",
  "q_12346": "blue",
  "q_12347": "green"
}
```

### 3. **Filtering Questions**

Students can now filter questions by flag level from the selection screen:

- **✅ Clear** - Show only clear questions
- **🔵 Confusing** - Show only confusing questions
- **❌ Hard** - Show only hard questions
- **No filter** - Show all questions (default)

---

## 🎯 Using the Flag System in Quiz

### During Quiz

While taking a quiz, click the "Flag" button to cycle through flag levels:

```
✅ Clear (green) 
    → Click
🔵 Confusing (blue) 
    → Click
❌ Hard (red)
    → Click
✅ Clear (green) [cycles back]
```

### Flag Status on Question

Each question displays its current flag level:

```
[Green Tag] ✅ green
[Blue Tag]  🔵 blue
[Red Tag]   ❌ red
```

---

## 📝 Adding Flag Field to Existing Questions

### Option 1: Manual Update in Firestore Console

1. Go to Firebase Console → Firestore Database
2. Open your `subjects` collection
3. For each question, add a field:
   - Field Name: `flag`
   - Type: String
   - Value: `green` (or `blue`/`red` as needed)

### Option 2: Bulk Update with Script

Create a script file called `update-flags.js`:

```javascript
import { db } from './firebase-config.js';
import { collection, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export async function addFlagsToQuestions() {
  try {
    console.log("📌 Adding flag field to all questions...");
    
    const querySnapshot = await getDocs(collection(db, "subjects"));
    
    let updated = 0;
    
    for (const subjectDoc of querySnapshot.docs) {
      const subjectData = subjectDoc.data();
      
      if (subjectData.subtopics && Array.isArray(subjectData.subtopics)) {
        for (let i = 0; i < subjectData.subtopics.length; i++) {
          const subtopic = subjectData.subtopics[i];
          
          if (subtopic.questions && Array.isArray(subtopic.questions)) {
            for (let j = 0; j < subtopic.questions.length; j++) {
              if (!subtopic.questions[j].flag) {
                subtopic.questions[j].flag = 'green'; // Default to green
                subtopic.questions[j].question_image = null; // Prepare for images
                
                // Add image fields to options
                if (subtopic.questions[j].options) {
                  subtopic.questions[j].options.A_image = null;
                  subtopic.questions[j].options.B_image = null;
                  subtopic.questions[j].options.C_image = null;
                  subtopic.questions[j].options.D_image = null;
                }
                
                updated++;
              }
            }
          }
        }
      }
      
      // Update the document
      await updateDoc(doc(db, "subjects", subjectDoc.id), subjectData);
    }
    
    console.log(`✅ Updated ${updated} questions with flag field`);
    alert(`✅ ${updated} questions updated with flag field!`);
    
  } catch (error) {
    console.error("❌ Error updating flags:", error);
    alert("❌ Error: " + error.message);
  }
}

// Call this function once from browser console or HTML button
window.updateAllFlags = addFlagsToQuestions;
```

Run it from browser console:
```javascript
await updateAllFlags();
```

---

## 🖼️ Preparing for Future Image Support

The system is already prepared for adding images to questions and options. Here's what's ready:

### Question Images

```javascript
{
  questionImage: null,  // Will store image URL in future
  question: "What building is this?",
  // When images are added:
  // questionImage: "https://storage.googleapis.com/..."
}
```

### Option Images

```javascript
{
  optionsData: [
    { 
      key: 'A', 
      text: 'New Delhi',
      image: null  // Will store image URL in future
    },
    { 
      key: 'B', 
      text: 'Mumbai',
      image: null
    },
    // ... etc
  ]
}
```

### How to Add Images Later

1. **Upload images** to Firebase Storage or CDN
2. **Update Firestore** with image URLs:
   ```javascript
   {
     question: "What building is this?",
     questionImage: "https://cdn.example.com/building.jpg",
     options: {
       A: "New Delhi",
       A_image: "https://cdn.example.com/delhi.jpg",
       B: "Mumbai",
       B_image: "https://cdn.example.com/mumbai.jpg",
       // ...
     }
   }
   ```
3. **Display images** in quiz (UI code ready to handle it)

---

## 💾 Firestore Data Structure Example

Here's a complete example of how your questions should look:

```json
{
  "subjects": [
    {
      "subject": "GK",
      "chapter": "Indian Geography",
      "section": "Capital Cities",
      "topic": "National Capitals",
      "subtopics": [
        {
          "subtopic": "South Indian Capitals",
          "questions": [
            {
              "question_id": "q_001",
              "question": "What is the capital of Telangana?",
              "question_image": null,
              "options": {
                "A": "Hyderabad",
                "A_image": null,
                "B": "Bangalore",
                "B_image": null,
                "C": "Chennai",
                "C_image": null,
                "D": "Kochi",
                "D_image": null
              },
              "correct_answer": "A",
              "explanation": "Hyderabad is the capital of Telangana state in India.",
              "exam": "UPSC",
              "difficulty": "easy",
              "prev_year": { "asked": true },
              "flag": "green"
            }
          ]
        }
      ]
    }
  ]
}
```

---

## 🔑 Key Functions Reference

### Backend (JavaScript)

```javascript
// Load all questions (now includes flag field)
const questions = await loadQuestionsFromFirestore();

// Get flag for a question
const flag = getQuestionFlag(questionId);  // Returns: 'green', 'blue', or 'red'

// Set flag for a question (happens during quiz)
questionFlags[questionId] = 'red';
localStorage.setItem('questionFlags', JSON.stringify(questionFlags));
```

### Frontend (UI)

```javascript
// Toggle flag filter (cycles through levels or clears)
toggleFlagFilter('red');     // Show only red flagged
toggleFlagFilter('blue');    // Show only blue flagged
toggleFlagFilter('green');   // Show only green flagged
toggleFlagFilter(null);      // Clear filter

// Toggle during quiz (cycles: green → blue → red → green)
toggleFlag();
```

---

## ✅ Checklist: Implementation Status

- ✅ Flag field added to Firestore structure
- ✅ Three-level system (green/blue/red) implemented
- ✅ localStorage for storing user's flags
- ✅ Filter questions by flag level
- ✅ Display flag indicators on questions
- ✅ Cycle through flags during quiz
- ✅ Image infrastructure prepared (fields ready)
- ⏳ Image UI rendering (ready for implementation)
- ⏳ Image upload interface (ready for implementation)

---

## 🚀 Next Steps

### Short Term
1. Add the `flag` field to all existing questions in Firestore using the update script above
2. Start using the flag system during quizzes
3. Students can mark questions as confusing/hard for later review

### Long Term (Image Support)
1. Upload images to Firebase Storage or CDN
2. Update question documents with image URLs
3. Enable image rendering in quiz display
4. Create image upload interface for admins

---

## 📞 Support

If you encounter any issues:

1. **Check localStorage**: Open DevTools → Console → Type `questionFlags`
2. **Check Firestore**: Verify questions have the `flag` field
3. **Clear cache**: `localStorage.clear()` if questions aren't updating properly
4. **Browser console**: Check for any error messages

---

**Version:** 1.0  
**Last Updated:** Feb 2026  
**Status:** ✅ Production Ready
