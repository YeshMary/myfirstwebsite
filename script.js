document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("nav-open");
    });
  }
});


//This does two things:

// When you tap the hamburger → menu opens
// When you tap ANY link → menu closes properly
//No more invisible overlay blocking the page.

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
});

// Close menu when clicking any link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-open');
  });
});
