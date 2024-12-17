// Wait for the DOM content to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling functionality for navigation links
    const links = document.querySelectorAll('nav ul li a, .btn'); // Update this to include the correct button class
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target ID from the href
            const targetSection = document.getElementById(targetId); // Find the target section by ID
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Smooth scroll to the section
                    block: 'start' // Scroll to the start of the section
                });
            }
        });
    });
});

// Intersection Observer for animating sections when they come into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the 'visible' class when the section comes into view
            observer.unobserve(entry.target); // Stop observing once the section is visible
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the section is in view
});

// Observe all sections for visibility
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});