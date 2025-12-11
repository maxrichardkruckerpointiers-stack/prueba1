import { GoogleGenAI, Type, SchemaType } from "@google/genai";
import { TOURS } from "../constants";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// Schema for structured output
const tourRecommendationSchema = {
  type: Type.OBJECT,
  properties: {
    recommendedTourId: {
      type: Type.STRING,
      description: "The ID of the tour from the provided list that best matches the user's request.",
    },
    reasoning: {
      type: Type.STRING,
      description: "A short, persuasive explanation (max 2 sentences) why this tour is perfect for the user.",
    },
  },
  required: ["recommendedTourId", "reasoning"],
};

export const getTourRecommendation = async (userPreference: string): Promise<{ recommendedTourId: string; reasoning: string } | null> => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found. Mocking response.");
    // Fallback mock for demo purposes if no key provided
    return {
      recommendedTourId: TOURS[0].id,
      reasoning: "Based on your request, we think you'll love exploring the history of the Walled City!"
    };
  }

  const tourContext = TOURS.map(t => `ID: ${t.id}, Title: ${t.title}, Category: ${t.category}, Desc: ${t.description}`).join('\n');

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User preference: "${userPreference}". Available Tours: \n${tourContext}`,
      config: {
        systemInstruction: "You are an expert Cartagena tour guide. Recommend ONE tour from the available list based on the user's preference. Return JSON.",
        responseMimeType: "application/json",
        responseSchema: tourRecommendationSchema
      },
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
