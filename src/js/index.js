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


const ITEM_LEFT = document.getElementById('item-left');
const ITEM_RIGHT = document.getElementById('item-right');
const ITEM_ACTIVE = document.getElementById('item-active');
const slideListClone = list.cloneNode(true);
let counter = 1;
const slideCards = document.querySelectorAll('.slide-card')

const slideArray = [...slideCards];

const moveLeft = () => {
  if (counter !== 1) counter -= 1;
  if (counter < 5) {
    arrNext.classList.remove('disable');
    arrNext.style.background = 'linear-gradient(113.96deg, var(--color-primary) 1.49%, var(--color-primary))';
  }
  if (counter < 2) {
    arrPrev.classList.add('disable');
    arrPrev.style.background = 'black';
  }

  ITEM_LEFT.innerHTML = '';
  ITEM_LEFT.appendChild(slideArray[counter - 1])
  list.classList.add("transition-left");
  
  arrPrev.removeEventListener("click", moveLeft);
  arrNext.removeEventListener("click", moveRight);
  
};
  
const moveRight = () => {
  if (counter === 1 &&  !arrPrev.classList.contains('disable')) counter += 1;
  counter += 1
  if (counter > 0) {
        arrPrev.classList.remove('disable');
        arrPrev.style.background = 'linear-gradient(113.96deg, var(--color-primary) 1.49%, var(--color-primary))';
      }
      if (counter > 4) {
        arrNext.classList.add('disable');
        arrNext.style.background = 'black';
      }
 
  ITEM_RIGHT.innerHTML = '';
  ITEM_RIGHT.appendChild(slideArray[counter - 1])
  list.classList.add("transition-right");
  
  arrPrev.removeEventListener("click", moveLeft);
  arrNext.removeEventListener("click", moveRight);
 
};

arrPrev.addEventListener("click", moveLeft);
arrNext.addEventListener("click", moveRight);

list.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    list.classList.remove("transition-left");
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    list.classList.remove("transition-right");
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }
 
  arrPrev.addEventListener("click", moveLeft);
  arrNext.addEventListener("click", moveRight);
});

const slider = document.getElementById('slider');
const overlay = document.getElementById('overlay');
const mems = document.getElementById('mems');

slider.addEventListener('click', () => {
  mems.style.display = 'flex';
  
});

function handleClick(event) {
  if (event.target.classList.contains('slide-arrow')) {
    document.removeEventListener('click', handleClick)
  } else {
    mems.style.display = 'none';
  }
}

mems.addEventListener('click', handleClick);


