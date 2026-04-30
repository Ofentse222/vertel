function hideAll() {
  document.getElementById("home").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("agents").style.display = "none";
}

function goHome() {
  hideAll();
  document.getElementById("home").style.display = "block";
}

function goDashboard() {
  hideAll();
  document.getElementById("dashboard").style.display = "block";
}

function goAgents() {
  hideAll();
  document.getElementById("agents").style.display = "block";
}

// ✅ REAL AI‑CONNECTED AGENT (NOT DEMO ANYMORE)
async function selectAgent(name) {
  const output = document.getElementById("agent-output");
  output.innerText = "Thinking... 🤖";

  try {
    const response = await fetch("/api/agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        agent: name,
        prompt: "Create a professional invoice with line items and totals."
      })
    });

    if (!response.ok) {
      throw new Error("Backend error: " + response.status);
    }

    const data = await response.json();
    output.innerText = data.result;
  } catch (error) {
    console.error(error);
    output.innerText =
      "❌ Failed to get AI response. Check backend /api/agent.";
  }
}
