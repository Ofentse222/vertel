import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Agent-specific roles
const AGENT_ROLES = {
  Kevin: "You are a customer support invoice assistant. You explain invoices clearly and politely.",
  Stuart: "You generate short, informal invoice summaries suitable for WhatsApp messages.",
  Bob: "You write detailed invoice descriptions with clear line items.",
  Dave: "You create professional invoices ready to be converted into PDF documents.",
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { agent, prompt } = req.body;

    if (!agent || !prompt) {
      return res.status(400).json({ error: "Missing agent or prompt" });
    }

    const systemPrompt =
      AGENT_ROLES[agent] ||
      "You are a general invoice assistant.";

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
    });

    res.status(200).json({
      agent,
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI error:", error);
    res.status(500).json({ error: "AI processing failed" });
  }
}
