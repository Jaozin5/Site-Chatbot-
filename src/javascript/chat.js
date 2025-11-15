const input = document.getElementById("userInput");
const button = document.getElementById("sendBtn");

button.addEventListener("click", () => {
  const userText = input.value.trim();
  if (userText) {
    alert("Você perguntou: " + userText);
    input.value = "";
  }
});
