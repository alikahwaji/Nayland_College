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
});
