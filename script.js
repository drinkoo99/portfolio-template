// info: mobile toggle for hamburger menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', ()=>{
  navLinks.classList.toggle('active');
})