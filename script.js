// Toogle class active 
const navMenu = document.querySelector('.navbar-nav');

// ketika hamburger menu diklik, maka akan menambahkan atau menghapus class 'active' pada navMenu
document.querySelector('#hamburger').onclick = () => {
    navMenu.classList.toggle('active');
}

// klik diluar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navMenu.contains(e.target)){
        navMenu.classList.remove('active');
    }
});