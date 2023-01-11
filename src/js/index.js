document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const burgerMenu = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const overlayBurger = document.getElementById('overlay-burger');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle("close");
  menu.classList.toggle("overlay");
  overlayBurger.classList.toggle("open");
});

overlayBurger.addEventListener('click', () => {
  burgerMenu.classList.toggle("close");
  menu.classList.toggle("overlay");
  overlayBurger.classList.toggle("open");
});