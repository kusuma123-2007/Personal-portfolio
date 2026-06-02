// Smooth scrolling effect for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Simple fade-in animation on page load

window.addEventListener('load', () => {

    document.body.style.opacity = "1";

});


// Portfolio loaded message

console.log("Professional Portfolio Loaded Successfully!");