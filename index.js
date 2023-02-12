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


// SKILLS SECTION ANIMATION

const skillsContent = document.getElementById('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header');


function toggleSkills(){
    let itemClass = this.parentNode.getElementByClassName

    for(i = 0; i < skillsContent.clientHeight; i++){
        skillsContent[i].className = 'skills__content skills__close'
    } if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}