const menu = document.getElementById('menu-btn');
const navbar = document.getElementById('nav-bar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}