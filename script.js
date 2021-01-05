function detectMob() {
  return ((window.innerWidth <= 800) && (window.innerHeight <= 850));
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('nav-menu');
  menuLinks.classList.toggle('aaa');
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    if (detectMob()) {
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('nav-menu');
      menuLinks.classList.toggle('aaa');
    }
  });
}
