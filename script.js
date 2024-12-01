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
window.addEventListener('scroll', function () {
    const starNightSection = document.querySelector('.star-night-section');
    const sectionPosition = starNightSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        starNightSection.classList.add('active');
    }
});
// Lightbox functionality
const imageLinks = document.querySelectorAll('.image-link');

imageLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const imageUrl = this.href;

        // Create the lightbox elements
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.classList.add('lightbox-overlay');
        lightboxOverlay.innerHTML = `
            <div class="lightbox-content">
                <img src="${imageUrl}" alt="Full Size Image" />
                <span class="close-lightbox">&times;</span>
            </div>
        `;
        document.body.appendChild(lightboxOverlay);

        // Close lightbox on clicking the close button or overlay
        lightboxOverlay.addEventListener('click', function (e) {
            if (e.target.classList.contains('lightbox-overlay') || e.target.classList.contains('close-lightbox')) {
                document.body.removeChild(lightboxOverlay);
            }
        });
    });
});
// Lightbox functionality for gallery
const galleryLinks = document.querySelectorAll('.gallery-container a');

galleryLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const imageUrl = this.href;

        // Create the lightbox elements
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.classList.add('lightbox-overlay');
        lightboxOverlay.innerHTML = `
            <div class="lightbox-content">
                <img src="${imageUrl}" alt="Gallery Image Fullscreen" />
                <span class="close-lightbox">&times;</span>
            </div>
        `;
        document.body.appendChild(lightboxOverlay);

        // Close lightbox on clicking the close button or overlay
        lightboxOverlay.addEventListener('click', function (e) {
            if (e.target.classList.contains('lightbox-overlay') || e.target.classList.contains('close-lightbox')) {
                document.body.removeChild(lightboxOverlay);
            }
        });
    });
});
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });

        navbar.classList.remove('active'); // Close menu on link click
    });
});

