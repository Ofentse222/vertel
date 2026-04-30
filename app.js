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

function selectAgent(name) {
  document.getElementById("agent-output").innerText =
    name + " is generating your invoice… (demo)";
}
