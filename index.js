// import { default as Swiper } from "swiper";

/*Show menu and hidden */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose =  document.getElementById('nav-close');

/**
 * * Showe menu, validate if contant exist
 */

if(navToggle){ //true{
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')// class in css
    })
}

/**
 * ! Hidden menu, validate about before conditional
 */

if(navClose) { //If is true
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove a Mobile Menu I stract this code in bedimcode code!!
const navLink = document.querySelectorAll('.nav__link')//our id component

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link(Other icon in this menu), we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ? SKILLS SECTION ANIMATION

const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header'); /* Elements in all nodeList*/

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    } if(itemClass === 'skills__content skills__close'){ // Change class close to class open
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el =>{el.addEventListener('click', toggleSkills)}))


// ? SERVICES ACTION ANIMATION SECTION


const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

// * button active

modalBtns.forEach((modalBtn, i ) => { 
    modalBtn.addEventListener('click', () => {

    modal(i);

    })
})

// ! button close active

modalClose.forEach((modalClose) => { 
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

// Swiper initial
let swiper = new Swiper('.portfolio__container',{
    cssMode: true,
    loop: true, 

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


// LightDark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
