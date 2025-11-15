document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            alert('Klik untuk melihat lebih detail!');
        });
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.prev, .next').forEach(button => {
    button.addEventListener('click', (e) => {
        const sliderId = e.target.getAttribute('data-slider');
        const slider = document.getElementById(`${sliderId}-slider`);
        const cards = slider.children;
        const cardWidth = cards[0].offsetWidth + 32;
        const maxSlide = -(cards.length - Math.floor(slider.parentElement.offsetWidth / cardWidth)) * cardWidth;
        let currentTransform = parseInt(getComputedStyle(slider).transform.split(',')[4]) || 0;

        if (e.target.classList.contains('next') && currentTransform > maxSlide) {
            currentTransform -= cardWidth;
        } else if (e.target.classList.contains('prev') && currentTransform < 0) {
            currentTransform += cardWidth;
        }

        slider.style.transform = `translateX(${currentTransform}px)`;
    });
});