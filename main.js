// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".site-nav ul");
  if (btn && menu) {
    btn.addEventListener("click", () => menu.classList.toggle("open"));
  }
});
