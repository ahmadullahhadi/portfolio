// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSmoothScrolling();
    initializeTouchFeedback();
});

/**
 * Initialize smooth scrolling functionality for navigation links and buttons.
 * This function sets up click event listeners for seamless page navigation.
 */
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('nav ul li a, .btn');

    links.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
}

/**
 * Handle smooth scrolling for clicked links
 * @param {Event} e - Click event
 */
function handleSmoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href')?.substring(1);
    if (!targetId) return;

    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

/**
 * Configure and initialize intersection observer for scroll animations
 */
const scrollAnimationObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.5,
        rootMargin: '0px'
    }
);

// Apply scroll animations to all sections
document.querySelectorAll('section').forEach(section => {
    scrollAnimationObserver.observe(section);
});

/**
 * Ensure proper button click animation on mobile devices.
 * This fixes the issue where :active states stay stuck.
 */
function initializeTouchFeedback() {
    // Enables :active styles on iOS
    document.addEventListener('touchstart', () => {}, true);

    const interactiveElements = document.querySelectorAll('.btn, nav ul li a');

    interactiveElements.forEach(el => {
        // Add "pressed" class on touchstart or mousedown
        el.addEventListener('touchstart', () => el.classList.add('pressed'));
        el.addEventListener('mousedown', () => el.classList.add('pressed'));

        // Remove it on touchend or mouseup
        el.addEventListener('touchend', () => el.classList.remove('pressed'));
        el.addEventListener('mouseup', () => el.classList.remove('pressed'));
        el.addEventListener('mouseleave', () => el.classList.remove('pressed')); // optional safety
    });
}
