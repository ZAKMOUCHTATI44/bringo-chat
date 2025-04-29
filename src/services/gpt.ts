import fs from "fs";
import { OpenAI } from "openai";
require("dotenv").config();
const path = require("path");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const filePath = path.resolve(__dirname, "scenario.txt");

const scenarioText = fs.readFileSync(filePath, "utf-8");

export async function askBringoBot(message: string): Promise<string> {
  const chat = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    messages: [
      {
        role: "system",
        content: `Tu es un assistant IA pour Bringo (livraison de courses). Utilise ce scénario comme base :\n\n${scenarioText}\n\nRéponds toujours dans la langue utilisée par l'utilisateur.`,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return chat.choices[0].message.content || "Désolé, je n'ai pas compris.";
}
