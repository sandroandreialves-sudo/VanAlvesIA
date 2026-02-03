
import { GoogleGenAI, Type, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION, MODEL_NAME } from "../constants";
import { ProcessingResult } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async processTranscript(transcript: string): Promise<ProcessingResult> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: transcript,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            cliente_ficha: { type: Type.STRING },
            caso_resumo: { type: Type.STRING },
            analise_juridica: { type: Type.STRING },
            plano_acao: { type: Type.STRING },
            documentos: { type: Type.STRING },
            devolutiva: { type: Type.STRING },
            proposta: { type: Type.STRING },
            odoo_campos: { type: Type.STRING },
            pontos_criticos: { type: Type.STRING },
            perguntas: { type: Type.STRING },
          },
          required: [
            "cliente_ficha", "caso_resumo", "analise_juridica", "plano_acao", 
            "documentos", "devolutiva", "proposta", "odoo_campos", 
            "pontos_criticos", "perguntas"
          ]
        },
      },
    });

    try {
      return JSON.parse(response.text || '{}') as ProcessingResult;
    } catch (error) {
      console.error("Failed to parse Gemini response:", error);
      throw new Error("Falha ao processar a resposta do assistente.");
    }
  }

  createChatSession(context: string): Chat {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    return ai.chats.create({
      model: 'gemini-3-pro-preview', // Using Pro for complex follow-up reasoning
      config: {
        systemInstruction: `${SYSTEM_INSTRUCTION}\n\nO contexto da reunião processada é: ${context}\n\nVocê agora está disponível para responder perguntas adicionais do advogado sobre este caso específico.`,
      },
    });
  }
}

export const geminiService = new GeminiService();
