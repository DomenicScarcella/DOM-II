// Your code goes here
// BUTTONS
const navLinks = document.querySelectorAll('.nav a');
const btnLinks = document.querySelectorAll('.btn');

// IMAGES
const imgWelcome = document.querySelector('.intro img');
const imgMiddle = document.querySelectorAll('.img-content img');
const imgPickDest = document.querySelector('.content-destination img');

const header = document.querySelector('h1')
const footer = document.querySelector('.footer p');


// 1.
header.addEventListener("mouseenter", function(event) {
  event.target.style.color = "blue";
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
});

// 2.
document.addEventListener('keydown', function (event) {
    event.target.style.color = "blue";
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
});

// 3.
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.002;
    scale = Math.min(Math.max(.25, scale), 1.75);
    el.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const el = document.querySelector('footer');
  el.onwheel = zoom;

// 4.

  

