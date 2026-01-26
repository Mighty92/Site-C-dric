/* ====================================
   SCRIPT PRINCIPAL - script.js
   ==================================== */

// ======= CARROUSEL =======
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

// Auto changement toutes les 5 secondes
setInterval(nextSlide, 5000);

// Cliquer sur les dots
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(parseInt(dot.dataset.index));
  });
});

// ======= BOUTON MENU MOBILE =======
const mobileBtn = document.getElementById("mobileBtn");
const mobileNav = document.getElementById("mobileNav");

mobileBtn.addEventListener("click", () => {
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
});


// ======= ANNEE DYNAMIQUE FOOTER =======
document.getElementById('year').textContent = new Date().getFullYear();
