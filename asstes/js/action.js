const navbar = document.querySelector('nav');
const navSpan = document.querySelector('.nav-span')

if (window.scrollY > 0) {
    navbar.classList.add('fixed-top-0');
    navbar.classList.add('secondary-bg-color');
    navbar.classList.add('shadow');
    navSpan.classList.add('text-white');
} 
if (window.scrollY == 0){
    navbar.classList.remove('fixed-top-0');
    navbar.classList.remove('secondary-bg-color');
    navbar.classList.remove('shadow');
    navSpan.classList.remove('text-white');
}
window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('fixed-top-0');
        navbar.classList.add('secondary-bg-color');
        navbar.classList.add('shadow');
        navSpan.classList.add('text-white');
    } 
    if (window.scrollY == 0){
        navbar.classList.remove('fixed-top-0');
        navbar.classList.remove('secondary-bg-color');
        navbar.classList.remove('shadow');
        navSpan.classList.remove('text-white');
    }
};

// Why Choose Us Section

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let whyUsBtn = document.querySelector('.why-us-btn');
let whyUsBtn2 = document.querySelector('.why-us-btn2');
let whyUsBtn3 = document.querySelector('.why-us-btn3');

whyUsBtn.addEventListener('click', () => {
    one.classList.toggle("one-open");
});
whyUsBtn2.addEventListener('click', () => {
    two.classList.toggle("one-close");
});
whyUsBtn3.addEventListener('click', () => {
    three.classList.toggle("one-close");
});

// Navbar active color
let click0 = document.querySelector(`.click0`);
let click1 = document.querySelector(`.click1`);
let click2 = document.querySelector(`.click2`);
let click3 = document.querySelector(`.click3`);
let click4 = document.querySelector(`.click4`);
let click5 = document.querySelector(`.click5`);
let click6 = document.querySelector(`.click6`);

click0.addEventListener('click', () => {
    click0.classList.add('active');
    click1.classList.remove('active');
    click2.classList.remove('active');
    click3.classList.remove('active');
    click4.classList.remove('active');
    click5.classList.remove('active');
    click6.classList.remove('active');
})
click1.addEventListener('click', () => {
    click1.classList.add('active');
    click0.classList.remove('active');
    click2.classList.remove('active');
    click3.classList.remove('active');
    click4.classList.remove('active');
    click5.classList.remove('active');
    click6.classList.remove('active');
})
click2.addEventListener('click', () => {
    click2.classList.add('active');
    click0.classList.remove('active');
    click1.classList.remove('active');
    click3.classList.remove('active');
    click4.classList.remove('active');
    click5.classList.remove('active');
    click6.classList.remove('active');
})
click3.addEventListener('click', () => {
    click3.classList.add('active');
    click0.classList.remove('active');
    click1.classList.remove('active');
    click2.classList.remove('active');
    click4.classList.remove('active');
    click5.classList.remove('active');
    click6.classList.remove('active');
})
click4.addEventListener('click', () => {
    click4.classList.add('active');
    click0.classList.remove('active');
    click1.classList.remove('active');
    click2.classList.remove('active');
    click3.classList.remove('active');
    click5.classList.remove('active');
    click6.classList.remove('active');
})
click5.addEventListener('click', () => {
    click5.classList.add('active');
    click0.classList.remove('active');
    click1.classList.remove('active');
    click2.classList.remove('active');
    click3.classList.remove('active');
    click4.classList.remove('active');
    click6.classList.remove('active');
})
click6.addEventListener('click', () => {
    click6.classList.add('active');
    click0.classList.remove('active');
    click1.classList.remove('active');
    click2.classList.remove('active');
    click3.classList.remove('active');
    click4.classList.remove('active');
    click5.classList.remove('active');
})

