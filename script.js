// Wait for the DOM content to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling functionality for navigation links
    const links = document.querySelectorAll('nav ul li a'); // Select all navigation links
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor link behavior
            
            const targetId = link.getAttribute('href').substring(1); // Get the ID of the target section (removing the #)
            const targetSection = document.getElementById(targetId); // Find the section by ID
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth' // Smoothly scroll to the target section
                });
            }
        });
    });

    // Section visibility animation based on scroll position
    const sections = document.querySelectorAll('section'); // Select all sections on the page
    
    // Create an Intersection Observer to detect when sections are in the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Check if the section is visible in the viewport
                entry.target.classList.add('visible'); // Add the 'visible' class to trigger the animation
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    // Observe each section for visibility changes
    sections.forEach(section => {
        observer.observe(section);
    });
});
