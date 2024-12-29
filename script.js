// Custom cursor follower functionality
document.addEventListener('mousemove', (e) => {
    // Find the cursor follower element in the DOM
    const follower = document.querySelector('.cursor-follower');
    if (follower) {
        // Update the cursor follower position to match mouse coordinates
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }
});
// Enhanced cursor effects for interactive elements
document.querySelectorAll('a, button').forEach(element => {
    // When mouse enters a link or button
    element.addEventListener('mouseenter', () => {
        const follower = document.querySelector('.cursor-follower');
        if (follower) {
            // Scale up the cursor follower for hover effect
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        }
    });
    
    // When mouse leaves a link or button
    element.addEventListener('mouseleave', () => {
        const follower = document.querySelector('.cursor-follower');
        if (follower) {
            // Return cursor follower to normal size
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });
});

// Initialize smooth scrolling once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links and buttons that should trigger smooth scroll
    const links = document.querySelectorAll('nav ul li a, .btn');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Stop default anchor tag behavior
            
            // Extract the target section ID from the href attribute
            const targetId = link.getAttribute('href').substring(1);
            
            // Find the corresponding section in the document
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smoothly scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Enable smooth animation
                    block: 'start'    // Align top of section with top of viewport
                });
            }
        });
    });
});

// Initialize Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'visible' class to trigger CSS animations
            entry.target.classList.add('visible');
            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 // Element becomes visible when 50% is in viewport
});

// Apply the observer to all sections in the document
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
