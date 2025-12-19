
import { GoogleGenAI } from "@google/genai";

/**
 * Service to interact with the Google Gemini API.
 * Follows the @google/genai coding guidelines.
 */
export const aiService = {
  /**
   * Generates a text response using the gemini-3-flash-preview model.
   * @param prompt The message to send to the model.
   * @returns The generated text.
   */
  generateResponse: async (prompt: string) => {
    // Correct initialization with named parameter.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      // Directly accessing the .text property (not a method).
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }
};
