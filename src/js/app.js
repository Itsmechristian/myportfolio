"use strict"

let links = document.querySelectorAll('.aboutlink');

links.forEach(e => {
    e.addEventListener('click', function(event) {      event.stopPropagation()
    
     let section = document.getElementById(e.textContent.toLowerCase());
        
     window.scrollTo({
         top: section.offsetTop,
         behavior: 'smooth'
     })
    })
})

/* Check if the client height is greater than range so it will automatically animate */ 
window.onload = animationHandler;

/* Animate Scroll Handler */
window.addEventListener('scroll', animationHandler);


function animationHandler() {
    /**
     * 
     * @param {string} element Element to perform animation
     * @param {number} range Range from the top to animate
     */

    //About Section

    let windowHeight = window.innerHeight

    animateElement('#header-text', 700);
    animateElement('.bodytext-wrapper', 800)
    animateElement('.sectionTwoHeader', 1100)
    animateElement('.sectionTwoIconWrapper', 1300);
    animateElement('.sectionTwoIcon', 1300);
    animateElement('.icon-paragraph', 1300);
    animateElement('.otherSkillsHeading', 1700);
    animateElement('.skill-wrapper', 1700);
  

     function animateElement(element, range) {
        let el = document.querySelectorAll(element);
        el.forEach(e => {
            if(window.pageYOffset > (range - windowHeight) + e.offsetTop) {
                e.classList.add('animate')
            }
        })
    }
}