let textSize = 18;

function increaseText() {
  textSize += 2;
  document.body.style.fontSize = textSize + "px";
}

function decreaseText() {
  if (textSize > 14) {
    textSize -= 2;
    document.body.style.fontSize = textSize + "px";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

function readText() {
  const text = document.getElementById("mainContent").innerText;

  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

function stopReading() {
  window.speechSynthesis.cancel();
}