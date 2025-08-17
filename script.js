// Animate sections on scroll
function revealSections() {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Show/hide courses with animation
function toggleCourses() {
  const list = document.getElementById('courseList');
  list.classList.toggle('visible');
}

// Brutally honest Saveetha quotes
const quotes = [
  "Saveetha: where attendance is sacred, but common sense is optional!",
  "Come for the degree, stay for the drama — Saveetha style!",
  "If procrastination was a sport, Saveetha students would be world champs.",
  "Saveetha canteen food: guaranteed to test your stomach’s loyalty."
];
function showQuote() {
  const quoteDiv = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDiv.textContent = quotes[randomIndex];
  quoteDiv.classList.remove('visible');
  setTimeout(() => quoteDiv.classList.add('visible'), 50);
}
