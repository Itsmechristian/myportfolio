"use strict"

let links = document.querySelectorAll('.aboutlink');

links.forEach(e => {
    e.addEventListener('click', function(event) {      event.stopPropagation()
        
    
     let section = document.getElementById(e.textContent.toLowerCase());
        
     window.scrollTo({
         top: section.offsetTop - 50,
         behavior: 'smooth'
     })
    })
})


window.addEventListener('scroll', function() {
    //About Section
    let headerText = document.querySelectorAll('#header-text');
    let bodyText = document.querySelector('.bodytext-wrapper')
    let windowHeight = this.innerHeight

    headerText.forEach(e => {
        if(window.pageYOffset > (800 - windowHeight) + e.offsetTop) {
            e.classList.add('animate')
        }
    })

    if(window.pageYOffset > (900 - windowHeight) + bodyText.offsetTop) {
        bodyText.classList.add('animate')
    }
})

