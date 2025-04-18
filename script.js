const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const passwordInput = document.getElementById("password");
const strengthSpan = document.querySelector("#strength span");

function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/";

  let chars = "";
  if (useUpper) chars += upper;
  if (useLower) chars += lower;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;

  if (chars.length === 0) return alert("Selecione ao menos uma opção.");

  let password = "";
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * chars.length);
    password += chars[rand];
  }

  passwordInput.value = password;
  evaluateStrength(password);
}

function evaluateStrength(password) {
  let strength = 0;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  const levels = ["Fraca", "Média", "Forte", "Muito Forte"];
  strengthSpan.textContent = levels[strength - 1] || "Muito Fraca";
}

function copyPassword() {
  navigator.clipboard.writeText(passwordInput.value);
  alert("Senha copiada!");
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);