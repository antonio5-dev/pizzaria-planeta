const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('open');

    mainNav.classList.toggle('open');

});