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