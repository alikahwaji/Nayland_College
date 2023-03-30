document.addEventListener('DOMContentLoaded', function () {
    // Get all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each link
    for (const link of links) {
        link.addEventListener('click', function (event) {
            // Prevent default behavior
            event.preventDefault();
            
            // Get the target element ID
            const targetId = this.getAttribute('href');
            
            // Get the target element
            const targetElement = document.querySelector(targetId);
            
            // Smooth scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close the navigation menu on smaller screens
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('show');
        });
    }
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    // Close the navigation menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    for (const link of navLinks) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('show');
        });
    
 }
});

function showBackToTopButton() {
    const backToTopButton = document.querySelector('.back-to-top');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // ... existing code ...

    // Initialize and handle the "Back to Top" button
    const backToTopButton = document.querySelector('.back-to-top');
    
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', showBackToTopButton);
});
