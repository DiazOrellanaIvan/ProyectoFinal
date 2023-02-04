const navMenu = document.querySelector(".navMenu");
const navToggle = document.querySelector(".toggle");

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle("navMenuVisible");
});
