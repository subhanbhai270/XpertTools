// 🔐 Login Function
function login() {
  const username = document.getElementById("signin-username").value.trim();
  const password = document.getElementById("signin-password").value.trim();
  const captchaField = document.getElementById("captcha-answer");
  const captchaAnswer = captchaField ? parseInt(captchaField.value) : 8; // Default if no captcha input
  const correctAnswer = 8;

  if (!username || !password) {
    alert("Please enter username and password.");
    return;
  }

  if (password !== "1234") {
    alert("Invalid password. Try: password = 1234");
    return;
  }

  if (captchaAnswer !== correctAnswer) {
    alert("Please solve the captcha correctly.");
    return;
  }

  localStorage.setItem("loggedIn", "true");

  const toast = document.getElementById("toast");
  if (toast) {
    toast.innerText = `Welcome, ${username}!`;
    toast.style.display = "block";
  }

  setTimeout(() => {
    window.location.href = "home.html";
  }, 2000);
}

// 🔍 Login Check Function (Call on home.html)
function checkLogin() {
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "true") {
    showHome();
  } else {
    window.location.href = "login.html";
  }
}

// 🚪 Logout Function
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// 🖱️ Signup/Login Button
const signupBtn = document.getElementById("signup-btn");
if (signupBtn) {
  signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
    login();
  });
}

// ⌨️ Enter Key Triggers Login
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    login();
  }
});

// 🔎 Software Filter/Search
function filterSoftware() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const cards = document.getElementsByClassName("software-card");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const titleEl = card.querySelector("h2, h3");
    if (!titleEl) continue;

    const title = titleEl.textContent.toLowerCase();
    card.style.display = title.includes(filter) ? "" : "none";
  }
}

// 🏠 Home Content Toggle
function showHome() {
  const home = document.getElementById('homeContent');
  if (home) home.style.display = 'block';
}
function hideHome() {
  const home = document.getElementById('homeContent');
  if (home) home.style.display = 'none';
}

// 🟢 WhatsApp Tool Request
const requestForm = document.getElementById('requestForm');
if (requestForm) {
  requestForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const tool = document.getElementById('toolName').value;
    const details = document.getElementById('extraDetails').value;

    const message = `Assalam o Alaikum,\n\nUser Name: ${name}\nRequested Tool: ${tool}\nExtra Details: ${details}`;
    const whatsappURL = `https://wa.me/923286864531?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
    document.getElementById('responseMessage').innerText = "Request bhej di gayi hai. Aap se jald rabta kia jaye ga.";
  });
}

// 🌗 Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "dark") {
      body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
}

// ⏪ Load Theme on Page Load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
  }
});

// 💳 Payment Confirmation
let downloadUrl = '';

function confirmPayment(url) {
  downloadUrl = url;
  document.getElementById("paymentPopup").style.display = "flex";
}

function proceedToDownload() {
  window.open(downloadUrl, '_blank');
  closePopup();
}

function closePopup() {
  document.getElementById("paymentPopup").style.display = "none";
}

// 📱 Mobile/PC Pay Section Toggle
window.addEventListener("DOMContentLoaded", () => {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.getElementById("qrSection").style.display = "none";
    document.getElementById("mobilePay").style.display = "block";
  } else {
    document.getElementById("qrSection").style.display = "block";
    document.getElementById("mobilePay").style.display = "none";
  }
});
let card = document.querySelector('.card'); // Or loop through multiple cards
let title = card.querySelector('Lmc Camera, Lmc Xml files').textContent.toLowerCase();

console.log("Card Title:", title); // Optional log for debugging

// When you want to open the download link (e.g., on button click)
card.querySelector('button').addEventListener('click', () => {
    window.open("https://your-real-download-link.zip", "_blank");
});