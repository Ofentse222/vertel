export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { agent, prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  return res.status(200).json({
    agent,
    result: `${agent} processed your request: "${prompt}" (backend working)`
  });
}
const AGENT_ROLES = {
  "Dave": "You generate professional invoices and prepare them for PDF output.",
  "Bob": "You write clear invoice descriptions and line items.",
  "Stuart": "You generate short invoice summaries for messaging apps."
};
``
