
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "./constants";

export class PortfolioAI {
  private chat: Chat | null = null;
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  }

  async initChat() {
    this.chat = this.ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chat) {
      await this.initChat();
    }
    
    try {
      const response = await this.chat!.sendMessage({ message });
      return response.text || "I'm sorry, I couldn't process that. Try again!";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "There was an error connecting to my neural net. Please try again later.";
    }
  }
}

export const aiService = new PortfolioAI();
