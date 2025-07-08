// pages/api/generate.ts

import { OpenAI } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: "Missing topic" });
  }

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `
You're an AI flashcard generator. Based on the topic "${topic}", generate 5 flashcards in the following JSON format:

[
  {
    "question": "Your question here?",
    "answer": "Your answer here."
  },
  ...
]

Only return the JSON array, nothing else. Make it accurate, clean, and useful.
          `.trim(),
        },
      ],
      temperature: 0.7,
    });

    const content = chatResponse.choices[0]?.message?.content;

    if (!content) {
      return res.status(500).json({ error: "No content from OpenAI" });
    }

    // Try parsing JSON from the content
    const flashcards = JSON.parse(content);
    return res.status(200).json({ flashcards });
  } catch (err: any) {
    console.error("OpenAI API error:", err);
    return res.status(500).json({ error: "Something went wrong with OpenAI" });
  }
}