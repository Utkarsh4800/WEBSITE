   // Simple functionality for smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Select the hamburger button and the navigation menu
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Toggle the 'active' class on the navigation menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
}); 

