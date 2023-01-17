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
