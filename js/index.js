// Your code goes here
// BUTTONS
const navLinks = document.querySelectorAll('.nav a');
const btnLinks = document.querySelectorAll('.btn');

// IMAGES
const imgWelcome = document.querySelector('.intro img');
const imgMiddle = document.querySelectorAll('.img-content img');
const imgPickDest = document.querySelector('.content-destination img');

const header = document.querySelector('h1')
const body = document.querySelector('body')
const footer = document.querySelector('.footer p');


// 1.
body.addEventListener('mouseenter', function(event) {
  event.target.style.color = 'blue';
  setTimeout(function() {
    event.target.style.color = '';
  }, 1000);
});

// 2.
body.addEventListener('keydown', function (event) {
  event.target.style.color = 'blue';
  setTimeout(function() {
    event.target.style.color = '';
  }, 1000);
});

// 3.
body.addEventListener('keypress', function (event) {
    event.target.style.color = 'blue';
  });
  
// 4.
body.addEventListener('keyup', function (event) {
  event.target.style.color = 'yellow';
  setTimeout(function() {
    event.target.style.color = '';
  }, 3000);
});

// 5.
body.addEventListener('dblclick', function(event) {
  event.target.style.color = 'blue';
  setTimeout(function() {
    event.target.style.color = '';
  }, 1000);
});

// 6.
body.addEventListener('contextmenu', function(event) {
  event.target.style.color = 'blue';
  setTimeout(function() {
    event.target.style.color = '';
  }, 1000);
});

// 7.
body.addEventListener('mouseout', function(event) {
  event.target.style.color = 'blue';
  setTimeout(function() {
    event.target.style.color = '';
  }, 1000);
});

// 8.
body.addEventListener('mouseup', function(event) {
  event.target.style.color = 'blue';
  setTimeout(function() {
    event.target.style.color = '';
  }, 1000);
});

// 9.
body.addEventListener('copy', function (event) {
    alert('Ctrl + C makes text blue');
})

// 10.
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.002;
    scale = Math.min(Math.max(.25, scale), 1.75);
    el.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const el = document.querySelector('footer');
  el.onwheel = zoom;


// preventDefault
Array.from(document.links).forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault()
    })
})