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
    let about = document.getElementById('about')
    let windowHeight = this.innerHeight


    if(this.pageYOffset > (about.offsetTop - windowHeight) + 100) {
        console.log(1)
    }
})


(function() {
    window.addEventListener('scroll', function() {
        
    })
})
