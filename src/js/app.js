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
