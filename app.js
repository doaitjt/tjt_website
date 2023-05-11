/** constants  */
const $ = document.querySelector.bind(document);
/** @type{HTMLElement}  */
const $$ = document.querySelectorAll.bind(document);

$('.g-normal.text-center.copy-right').innerText = `All rights reserved by TJTech. Copyright © ${new Date().getFullYear()}`;

/** func */

// for nav
/* const menu = navActions.map((e, i) => `
  <div class="nav-control ts-nm" onclick="openSubMenu(${i})">
    ${e}
    <svg class="nav-more-ic"><use href="#triangle-more"/></svg>
  </div>
`).join('');
$('#nav-controls').innerHTML = menu;
function openSubMenu(index) {
  console.log(index);
}
$$('.nav-control').forEach(element => {
  element.addEventListener('click', e => {
    const rect = element.getBoundingClientRect();
    console.log(rect);
    // const 
  })
}); */


function setSubmenuPosition() {
  const navControls = $('#nav-controls').getBoundingClientRect();
  const navitem = $$('.nav-control .sub-control-list')[1];
  const prevTarget = $('.nav-control').getBoundingClientRect();
  navitem.style.left = -prevTarget.width -24 + 'px';
  $$('.many-item').forEach(element => {
    element.style.width = navControls.width + 'px';

  });
}
setSubmenuPosition();

window.onresize = () => {
  setSubmenuPosition();
}

//

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


let showLang = false;
let clickedToLang = false;

$('#change-lang').addEventListener('click', () => {
  showLang = true;
  // 
  const rect = $('#change-lang').getBoundingClientRect();
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const option = document.createElement('div');
  option.className = 'lang-options';
  option.style.left = rect.x + 'px';
  option.style.top = rect.height + rect.y+ 'px';
  option.innerHTML = `
    <div class="lang-items" onclick="changeLang()">English</div>
    <div class="lang-items" onclick="changeLang()">Vietnamese</div>
  `;

  overlay.appendChild(option);
  if(showLang) {
    document.body.appendChild(overlay);
    disableScroll();
  }
  overlay.addEventListener('click', () => {
    document.body.removeChild(overlay);
    enableScroll();
    showLang = false;
  })
  // $('#change-lang .lang-options').style.display = showLang ? 'block' : 'none';
  
});

function changeLang() {
  console.log(`set lang`);
}

const container = document.getElementById('rounded-container');
const squares = document.getElementsByClassName('around-item');

// Calculate the angle between each square
const angle = (2 * Math.PI) / squares.length;

// Set the positions of each square
for (let i = 0; i < squares.length; i++) {
  const square = squares[i];
  
  // Calculate the position of the square along the circle
  const x = Math.cos(i * angle) * 300; // Adjust the radius as desired
  const y = Math.sin(i * angle) * 300; // Adjust the radius as desired
  
  // Set the position of the square
  square.style.left = `${x + 270}px`; // Adjust the horizontal center position as per the container width
  square.style.top = `${y + 270}px`; // Adjust the vertical center position as per the container height
}