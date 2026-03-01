// gemini-service.js
// Gemini AI Integration for Quiz - IMPROVED

const GEMINI_API_KEY = "AIzaSyCuayj6uy98AXE6mxnZYrStixXuYke8DYg";
// Try gemini-3-flash-preview first, fallback available if needed
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";
const GEMINI_API_URL_FALLBACK = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

/**
 * Call Gemini API with proper error handling
 */
async function callGeminiAPI(prompt) {
  try {
    console.log("🔄 Calling Gemini API...");
    
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          temperature: 0.9,
          maxOutputTokens: 2000
        }
      })
    });

    console.log("📡 API Response Status:", response.status);

    if (!response.ok) {
      // special handling for rate limits
      if (response.status === 429) {
        const errorData = await response.json();
        console.error("⚠️ Rate limit hit:", errorData);
        let retryMsg = '';
        if (errorData && errorData.error && errorData.error.message) {
          retryMsg = errorData.error.message;
        }
        // show detailed quota error
        const quotaAlert = 'Gemini Free Tier Quota Exceeded!\n\nOptions:\n1. Wait a few hours (quota resets)\n2. Add a billing method in Google Cloud Console\n3. Try a different API key\n\nError: ' + retryMsg;
        alert(quotaAlert);
        throw new Error('Quota exceeded – please check your plan/billing or retry later. ' + retryMsg);
      }
      const errorData = await response.json();
      console.error("❌ API Error:", errorData);
      throw new Error(errorData?.error?.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ API Response:", data);

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error("No response text received from API");
    }
    
    return text;
  } catch (error) {
    console.error("❌ Gemini API Error:", error.message);
    throw error;
  }
}

/**
 * Get hint for current question from Gemini
 * @param {String} question - Question text
 * @param {Array} options - Array of option objects
 * @returns {Promise<String>} Hint text
 */
export async function getHint(question, options) {
  try {
    const optionsText = options.map((opt, idx) => `${String.fromCharCode(65 + idx)}) ${opt.text}`).join("\n");
    
    const prompt = `You are a helpful teacher. Give a SHORT HINT (1-2 lines only) for this question WITHOUT revealing the answer.

Question: ${question}

Options:
${optionsText}

Hint:`;

    const result = await callGeminiAPI(prompt);
    return result || "Hint not available";
  } catch (error) {
    console.error("❌ Hint Error:", error);
    return "⚠️ Could not load hint. Check console for details.";
  }
}

/**
 * Get detailed explanation from Gemini
 * @param {String} question - Question text
 * @param {String} correctAnswer - Correct option text
 * @param {String} explanation - Existing explanation
 * @returns {Promise<String>} Detailed explanation
 */
export async function getExplanation(question, correctAnswer, explanation) {
  try {
    const prompt = `You are an expert teacher. Provide a DETAILED EXPLANATION (2-3 paragraphs) for why this is the correct answer.

Question: ${question}

Correct Answer: ${correctAnswer}

Original Explanation: ${explanation}

Please provide a comprehensive explanation that helps students understand the concept deeply.`;

    const result = await callGeminiAPI(prompt);
    return result || explanation || "Explanation not available";
  } catch (error) {
    console.error("❌ Explanation Error:", error);
    return explanation || "⚠️ Could not load explanation. Check console for details.";
  }
}

// The older discussion helper was removed because a more flexible version follows later.
// Keeping only the enhanced `getDiscussionResponse` implementation defined below,
// which allows switching prompts (e.g., Hindi) and avoids duplicate declarations.

/**
 * Validate JSON data using Gemini AI
 * @param {String} jsonString - JSON to validate
 * @returns {Promise<Object>} Validation result
 */
export async function validateJSONWithAI(jsonString) {
  try {
    const prompt = `You are a JSON validator. Check this data and report:
1. Is it valid JSON? (yes/no)
2. Any errors? (list them)
3. Any issues with quiz structure? (question_id, question, options, correct_answer, etc)

Data:
${jsonString.substring(0, 1000)}...

Respond in this format:
VALID: yes/no
ERRORS: [list or "none"]
STRUCTURE_ISSUES: [list or "looks good"]
`;

    const result = await callGeminiAPI(prompt);
    
    return {
      valid: result.includes("VALID: yes"),
      response: result
    };
  } catch (error) {
    console.error("❌ Validation Error:", error);
    return {
      valid: false,
      response: "Error during validation: " + error.message
    };
  }
}

// Translate the question/options to Marathi
export async function getMarathiTranslation(question, options) {
  try {
    const optionsText = options.map((opt, idx) => `${idx + 1}. ${opt}`).join("\n");
    const prompt = `You are a professional Marathi translator. Translate ONLY the question and options into Marathi.\n\nRETURN ONLY a valid JSON object with this exact structure (no extra text, no explanation):\n{\n  "question": "[Full Marathi translation of question]",\n  "options": ["[Marathi option A]", "[Marathi option B]", "[Marathi option C]", "[Marathi option D]"]\n}\n\nQuestion to translate: ${question}\n\nOptions to translate:\n${optionsText}\n\nJSON Response (valid JSON only):`;

    const result = await callGeminiAPI(prompt);
    // extract JSON object from the response
    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[0]);
        if (parsed.question && parsed.options && Array.isArray(parsed.options)) {
          return parsed;
        }
      } catch (e) {
        console.error("JSON parse error:", e);
      }
    }

    // fallback
    return { question: "Translation failed - try again", options: [] };
  } catch (error) {
    console.error("❌ Translation Error:", error);
    return { question: "Error in translation", options: [] };
  }
}

// Default discussion prompt (can be changed at runtime).  Updated to simpler Hinglish chat-style per user request.
// The prompt is designed to give direct answers in mixed Hindi/English and to behave
// like a normal AI chat—no overly formal structure or long academic formatting.
let discussionPrompt = `You are a friendly AI tutor. When a student asks a question, answer
in simple Hinglish (mix of Hindi and English), just like a casual chat with GPT. Use
whatever you know to reply directly. Avoid long academic essays; keep paragraphs
short and conversational, and make sure the student feels like they are talking to
an intelligent assistant. Always base your responses on the question provided.
`;

/**
 * Set custom discussion prompt at runtime
 * @param {String} newPrompt
 */
export function setDiscussionPrompt(newPrompt) {
  if (typeof newPrompt === 'string' && newPrompt.trim().length > 0) {
    discussionPrompt = newPrompt.trim();
    return true;
  }
  return false;
}

// Generate discussion response using the active discussion prompt
export async function getDiscussionResponse(question, userMessage) {
  try {
    // Build final prompt by injecting question and student message into the chosen prompt
    const finalPrompt = `${discussionPrompt}\n\nQUESTION: ${question}\n\nSTUDENT: ${userMessage}\n\nREPLY:`;

    const result = await callGeminiAPI(finalPrompt);
    return result || "Unable to respond";
  } catch (error) {
    console.error("❌ Discussion Error:", error);
    return "⚠️ Could not get response. Please try again.";
  }
}

// Export to window for global access
window.getHint = getHint;
window.getExplanation = getExplanation;
window.getDiscussionResponse = getDiscussionResponse;
window.getMarathiTranslation = getMarathiTranslation;
window.validateJSONWithAI = validateJSONWithAI;
// allow prompt updates from console or other scripts
window.setDiscussionPrompt = setDiscussionPrompt;
