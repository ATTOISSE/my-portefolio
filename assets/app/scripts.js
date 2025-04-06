document.addEventListener('DOMContentLoaded', function() {
    // Background image carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    
    function rotateCarousel() {
        // Remove active class from current item
        carouselItems[currentItem].classList.remove('active');
        
        // Move to next item
        currentItem = (currentItem + 1) % carouselItems.length;
        
        // Add active class to new current item
        carouselItems[currentItem].classList.add('active');
    }
    
    // Start carousel rotation every 5 seconds
    const carouselInterval = setInterval(rotateCarousel, 5000);
    
    // Pause carousel on hover
    const hero = document.querySelector('.hero');
    hero.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    hero.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(rotateCarousel, 5000);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

// Form submission
const form = document.querySelector('form');
if (form) {
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message! Je vous répondrai dès que possible.');
    this.reset();
});
}

// experience-card

// Animate skill bars on scroll
document.addEventListener('DOMContentLoaded', function() {
const skillItems = document.querySelectorAll('.skill-item');

const animateSkills = () => {
skillItems.forEach(item => {
const percent = item.getAttribute('data-percent');
const progressBar = item.querySelector('.skill-progress');
progressBar.style.width = `${percent}%`;
});
};

// Intersection Observer to trigger animation when section is visible
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
    animateSkills();
    observer.unobserve(entry.target);
}
});
}, { threshold: 0.2 });

observer.observe(document.querySelector('.skills-section'));
});