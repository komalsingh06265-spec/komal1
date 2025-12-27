const btn = document.getElementById("themeBtn");
let darkMode = false;

btn.addEventListener("click", () => {
  if (!darkMode) {
    document.body.style.background = "#111";
    document.body.style.color = "white";
    darkMode = true;
  } else {
    document.body.style.background = "#f4f6fb";
    document.body.style.color = "#333";
    darkMode = false;
  }
});