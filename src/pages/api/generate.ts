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
          content: `Give me 5 smart, clear flashcards on the topic: "${topic}". Format them nicely.`,
        },
      ],
    });

    const output = chatResponse.choices[0]?.message?.content;
    res.status(200).json({ output });
  } catch (err: any) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ error: "Something went wrong with OpenAI" });
  }
}