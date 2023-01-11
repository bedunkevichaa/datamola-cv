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

const list = document.getElementById('slides-container');
const listElems = document.querySelectorAll('.slide');
const arrPrev = document.querySelector('#slide-arrow-prev');
const arrNext = document.querySelector('#slide-arrow-next');

let position = 0;
let counter = 1;
let width = 1050;

function changeBackstageImg(x, y) {
  if (x.matches) width = 555;
  if (y.matches) width = 287;
}

let x = window.matchMedia("(max-width: 999px)");
let y = window.matchMedia("(max-width: 639px)");
changeBackstageImg(x, y); // Call listener function at run time
x.addListener(changeBackstageImg); // Attach listener function on state changes
y.addListener(changeBackstageImg);




arrPrev.style.background = 'black';
arrPrev.classList.add('disable');

arrPrev.onclick = function() {
  counter -= 1;
  if (counter < 5) {
    arrNext.classList.remove('disable');
    arrNext.style.background = 'linear-gradient(113.96deg, var(--color-primary) 1.49%, var(--color-primary))';
  }
  if (counter < 2) {
    arrPrev.classList.add('disable');
    arrPrev.style.background = 'black';
  }
  position += width;

  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

arrNext.onclick = function() {
  counter += 1;
  if (counter > 1) {
    arrPrev.classList.remove('disable');
    arrPrev.style.background = 'linear-gradient(113.96deg, var(--color-primary) 1.49%, var(--color-primary))';
  }
  if (counter > 4) {
    arrNext.classList.add('disable');
    arrNext.style.background = 'black';
  }
  position -= width;
  
  position = Math.max(position, -width * (listElems.length - 1));
  list.style.marginLeft = position + 'px';
};

const slider = document.getElementById('slider');
const overlay = document.getElementById('overlay');
const mems = document.getElementById('mems');

slider.addEventListener('click', () => {
  mems.style.display = 'flex';
  
});

function handleClick(event) {
  if (event.target.classList.contains('slide-arrow')) {
    //alert(event.target.textContent)
    document.removeEventListener('click', handleClick)
  } else {
    mems.style.display = 'none';
  }
}

mems.addEventListener('click', handleClick);


