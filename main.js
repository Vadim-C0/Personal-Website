// ===============================
// Hamburger Menu Toggle
// ===============================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// ===============================
// AOS Initialization
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200, // animation duration in ms
        once: true      // animate only once
    });
});

// ===============================
// Sequential animations for Achievements certificates
// ===============================
const certificates = document.querySelectorAll('.certificate');
certificates.forEach((cert, index) => {
    cert.setAttribute('data-aos', 'zoom-in');
    cert.setAttribute('data-aos-delay', index * 200); // staggered delay
});

// Close hamburger menu if clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
        navMenu.classList.remove('show');
        document.body.style.overflow = 'auto'; // allow scrolling again
    }
});