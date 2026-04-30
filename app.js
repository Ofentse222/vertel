// ----------------------
// Utility: hide all views
// ----------------------
function hideAll() {
  const sections = ["home", "dashboard", "agents"];

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
}

// ----------------------
// Navigation
// ----------------------
function goHome() {
  hideAll();
  const home = document.getElementById("home");
  if (home) home.style.display = "block";
}

function goDashboard() {
  hideAll();
  const dashboard = document.getElementById("dashboard");
  if (dashboard) dashboard.style.display = "block";
}

function goAgents() {
  hideAll();
  const agents = document.getElementById("agents");
  if (agents) agents.style.display = "block";
}

// ----------------------
// ✅ REAL AI‑CONNECTED AGENT
// ----------------------
async function selectAgent(name) {
  const output = document.getElementById("agent-output");

  if (!output) {
    console.error("Missing #agent-output element");
    return;
  }

  output.innerText = `🤖 ${name} is thinking...`;

  try {
    const response = await fetch("/api/agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent: name,
        prompt: "Create a professional invoice with line items, VAT, and totals.",
      }),
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.result) {
      throw new Error("No AI result returned");
    }

