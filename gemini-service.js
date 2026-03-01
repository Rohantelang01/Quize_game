// ==========================================
// gemini-service.js - Gemini AI Integration
// API key comes from config.js (gitignored)
// ==========================================

// GEMINI_API_KEY is now loaded from config.js
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const GEMINI_API_URL_FALLBACK = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

/**
 * Call Gemini API with proper error handling
 */
async function callGeminiAPI(prompt) {
  try {
    console.log("🔄 Calling Gemini API...");

  const apiKey = (typeof CONFIG !== 'undefined') ? CONFIG.GEMINI_API_KEY : '';
  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
    alert('⚠️ API key not set! Please configure config.js');
    throw new Error('API key not configured');
  }

    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.9, maxOutputTokens: 2000 }
      })
    });

    console.log("📡 API Response Status:", response.status);

    if (!response.ok) {
      if (response.status === 429) {
        const errorData = await response.json();
        console.error("⚠️ Rate limit hit:", errorData);
        let retryMsg = errorData?.error?.message || '';
        const quotaAlert = 'Gemini Free Tier Quota Exceeded!\n\nOptions:\n1. Wait a few hours (quota resets)\n2. Add billing in Google Cloud Console\n3. Try a different API key\n\nError: ' + retryMsg;
        alert(quotaAlert);
        throw new Error('Quota exceeded. ' + retryMsg);
      }
      const errorData = await response.json();
      console.error("❌ API Error:", errorData);
      throw new Error(errorData?.error?.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("No response text from API");
    return text;

  } catch (error) {
    console.error("❌ Gemini API Error:", error.message);
    throw error;
  }
}

/**
 * Get hint for current question
 */
async function getHint(question, options) {
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
    return "⚠️ Could not load hint. Check console for details.";
  }
}

/**
 * Get detailed explanation
 */
async function getExplanation(question, correctAnswer, explanation) {
  try {
    const prompt = `You are an expert teacher. Provide a DETAILED EXPLANATION (2-3 paragraphs) for why this is the correct answer.

Question: ${question}
Correct Answer: ${correctAnswer}
Original Explanation: ${explanation}

Please provide a comprehensive explanation that helps students understand the concept deeply.`;
    const result = await callGeminiAPI(prompt);
    return result || explanation || "Explanation not available";
  } catch (error) {
    return explanation || "⚠️ Could not load explanation.";
  }
}

/**
 * Validate JSON data using Gemini AI
 */
async function validateJSONWithAI(jsonString) {
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
STRUCTURE_ISSUES: [list or "looks good"]`;
    const result = await callGeminiAPI(prompt);
    return { valid: result.includes("VALID: yes"), response: result };
  } catch (error) {
    return { valid: false, response: "Error during validation: " + error.message };
  }
}

/**
 * Translate question + options to Marathi
 */
async function getMarathiTranslation(question, options) {
  try {
    const optionsText = options.map((opt, idx) => `${idx + 1}. ${opt}`).join("\n");
    const prompt = `You are a professional Marathi translator. Translate ONLY the question and options into Marathi.

RETURN ONLY a valid JSON object with this exact structure (no extra text, no explanation):
{
  "question": "[Full Marathi translation of question]",
  "options": ["[Marathi option A]", "[Marathi option B]", "[Marathi option C]", "[Marathi option D]"]
}

Question to translate: ${question}

Options to translate:
${optionsText}

JSON Response (valid JSON only):`;

    const result = await callGeminiAPI(prompt);
    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[0]);
        if (parsed.question && parsed.options && Array.isArray(parsed.options)) return parsed;
      } catch (e) {
        console.error("JSON parse error:", e);
      }
    }
    return { question: "Translation failed - try again", options: [] };
  } catch (error) {
    return { question: "Error in translation", options: [] };
  }
}

/**
 * Discussion prompt (can be updated at runtime)
 */
let discussionPrompt = `You are a friendly AI tutor. When a student asks a question, answer
in simple Hinglish (mix of Hindi and English), just like a casual chat. Use
whatever you know to reply directly. Avoid long academic essays; keep paragraphs
short and conversational. Always base your responses on the question provided.`;

function setDiscussionPrompt(newPrompt) {
  if (typeof newPrompt === 'string' && newPrompt.trim().length > 0) {
    discussionPrompt = newPrompt.trim();
    return true;
  }
  return false;
}

/**
 * Get discussion/chat response
 */
async function getDiscussionResponse(question, userMessage) {
  try {
    const finalPrompt = `${discussionPrompt}\n\nQUESTION: ${question}\n\nSTUDENT: ${userMessage}\n\nREPLY:`;
    const result = await callGeminiAPI(finalPrompt);
    return result || "Unable to respond";
  } catch (error) {
    return "⚠️ Could not get response. Please try again.";
  }
}

// Expose all functions to global scope
window.getHint = getHint;
window.getExplanation = getExplanation;
window.getDiscussionResponse = getDiscussionResponse;
window.getMarathiTranslation = getMarathiTranslation;
window.validateJSONWithAI = validateJSONWithAI;
window.setDiscussionPrompt = setDiscussionPrompt;