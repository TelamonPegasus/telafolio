const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('nav');
menuBtn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    menuBtn.classList.toggle('open');
});