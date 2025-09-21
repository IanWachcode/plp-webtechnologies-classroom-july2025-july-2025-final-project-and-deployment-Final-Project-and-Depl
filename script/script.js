// Example: Highlight current page in nav (already handled with class="active")
// You can add interactivity later (animations, project filtering, etc.)

console.log("Portfolio website loaded!");

// ===== 1. Typing Effect for Headings =====
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");
  if (heading) {
    const text = heading.textContent;
    heading.textContent = "";
    let i = 0;

    function typeEffect() {
      if (i < text.length) {
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80); // typing speed
      }
    }

    typeEffect();
  }
});

// ===== 2. Toast Notification when Clicking Buttons =====
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className =
    "fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg opacity-90";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000); // disappears after 2s
}

// Attach event listeners to all links
document.querySelectorAll("a").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const page = btn.textContent.trim();
    showToast(`Opening ${page}...`);
  });
});

// ===== 3. Random Background Gradient =====
const gradients = [
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-green-400 via-blue-500 to-purple-600",
  "from-pink-500 via-red-500 to-yellow-500",
  "from-cyan-500 via-teal-400 to-green-500",
  "from-orange-400 via-pink-500 to-purple-600"
];

const body = document.querySelector("body");
if (body) {
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  body.className = `bg-gradient-to-r ${randomGradient} text-white min-h-screen flex flex-col items-center justify-center text-center p-6`;
}

  function showTab(tabId) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
    event.target.classList.add("active");
  }
