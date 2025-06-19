// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 50;
    const opacity = Math.min(window.scrollY / 200, 0.98); // Gradual increase in opacity
    
    if (scrolled) {
        navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        navbar.style.boxShadow = `0 2px 10px rgba(52, 116, 108, ${opacity * 0.2})`;
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Simple mobile menu toggle (you'll need to add a hamburger button in the HTML)
const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
};

// Fade-in on scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const sectionsToAnimate = document.querySelectorAll('.approach, .features, .insights, .cta-section, .article-card, .feature-card, .page-content-wrapper');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});