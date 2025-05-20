// script.js
const magicBtn = document.getElementById('magicBtn');
const colorBtn = document.getElementById('colorBtn');
const tabButtons = document.querySelectorAll('.tabBtn');
const tabContent1 = document.getElementById('tabContent1');
const tabContent2 = document.getElementById('tabContent2');
const slideImg = document.getElementById('slideImg');
const nextSlide = document.getElementById('nextSlide');
const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const feedback = document.getElementById('feedback');

// Event handling
magicBtn.addEventListener('click', () => {
  alert('Button Clicked! 🎉');
});

magicBtn.addEventListener('mouseover', () => {
  magicBtn.textContent = '👀 Hovering!';
});

magicBtn.addEventListener('mouseout', () => {
  magicBtn.textContent = '✨ Click Me!';
});

document.addEventListener('keydown', (e) => {
  feedback.textContent = `Key pressed: ${e.key}`;
});

magicBtn.addEventListener('dblclick', () => {
  document.body.style.background = '#d1c4e9';
});

// Interactive elements
colorBtn.addEventListener('click', () => {
  colorBtn.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
});

let currentTab = 1;
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentTab = btn.dataset.tab;
    tabContent1.style.display = currentTab === '1' ? 'block' : 'none';
    tabContent2.style.display = currentTab === '2' ? 'block' : 'none';
  });
});

// Music tab slideshow
const images1 = ['giphy.gif', '200w.webp', 'giphy.webp'];
let currentSlide1 = 0;

document.getElementById('nextSlide1').addEventListener('click', () => {
  currentSlide1 = (currentSlide1 + 1) % images1.length;
  document.getElementById('slideImg1').src = images1[currentSlide1];
});

// Movies tab slideshow
const images2 = ['200.webp', '200 (1).webp'];
let currentSlide2 = 0;

document.getElementById('nextSlide2').addEventListener('click', () => {
  currentSlide2 = (currentSlide2 + 1) % images2.length;
  document.getElementById('slideImg2').src = images2[currentSlide2];
});


// Form validation
form.addEventListener('input', () => {
  let message = '';
  if (username.value.trim() === '') message += 'Username is required. ';
  if (!/\S+@\S+\.\S+/.test(email.value)) message += 'Invalid email. ';
  if (password.value.length < 8) message += 'Password must be at least 8 characters.';
  feedback.textContent = message;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (feedback.textContent === '') {
    alert('Form submitted successfully! ✅');
    form.reset();
  }
});
