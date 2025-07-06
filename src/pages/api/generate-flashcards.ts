import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { topic } = req.body;
  if (!topic) return res.status(400).json({ error: 'Missing topic' });

  const prompt = `Generate 5 flashcards about ${topic}. Format:
Question: ...
Answer: ...
(Repeat this format 5 times.)`;

  try {
    const hfRes = await fetch('https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    const data = await hfRes.json();

    const generated = data?.[0]?.generated_text || data?.generated_text || '';
    console.log('📦 HF response:', generated);

    res.status(200).json({ flashcards: generated });
  } catch (err) {
    console.error('❌ Hugging Face error:', err);
    res.status(500).json({ error: 'HF request failed' });
  }
}