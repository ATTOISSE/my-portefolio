// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Carousel and Profession Text Animation

document.addEventListener('DOMContentLoaded', function() {
    // Background image carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    let carouselInterval;
    
    function rotateCarousel() {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }
    
    function startCarousel() {
        carouselInterval = setInterval(rotateCarousel, 5000);
    }
    
    // Profession text carousel
    const professionItems = document.querySelectorAll('.profession-carousel span');
    let currentProfession = 0;
    let professionInterval;
    
    function rotateProfession() {
        professionItems[currentProfession].classList.remove('profession-active');
        professionItems[currentProfession].classList.add('profession-next');
        
        currentProfession = (currentProfession + 1) % professionItems.length;
        
        professionItems[currentProfession].classList.remove('profession-next');
        professionItems[currentProfession].classList.add('profession-active');
    }
    
    function startProfessionCarousel() {
        professionInterval = setInterval(rotateProfession, 3000);
    }
    
    // Initialize carousels
    startCarousel();
    startProfessionCarousel();
    
    // Pause on hover
    const hero = document.querySelector('.hero');
    hero.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
        clearInterval(professionInterval);
    });
    
    hero.addEventListener('mouseleave', () => {
        startCarousel();
        startProfessionCarousel();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Background image carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    let carouselInterval;
    
    function rotateCarousel() {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }
    
    function startCarousel() {
        carouselInterval = setInterval(rotateCarousel, 5000);
    }
    
    // Profession text carousel
    const professionItems = document.querySelectorAll('.profession-carousel span');
    let currentProfession = 0;
    let professionInterval;
    
    function rotateProfession() {
        professionItems[currentProfession].classList.remove('profession-active');
        professionItems[currentProfession].classList.add('profession-next');
        
        currentProfession = (currentProfession + 1) % professionItems.length;
        
        professionItems[currentProfession].classList.remove('profession-next');
        professionItems[currentProfession].classList.add('profession-active');
    }
    
    function startProfessionCarousel() {
        professionInterval = setInterval(rotateProfession, 3000);
    }
    
    // Initialize carousels
    startCarousel();
    startProfessionCarousel();
    
    // Pause on hover
    const hero = document.querySelector('.hero');
    hero.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
        clearInterval(professionInterval);
    });
    
    hero.addEventListener('mouseleave', () => {
        startCarousel();
        startProfessionCarousel();
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