// Scroll reveal animation
        const scrollReveal = {
            distance: '50px',
            origin: 'bottom',
            duration: 1000,
            delay: 200,
            reset: true
        };

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Parallax effect
        window.addEventListener('scroll', function() {
            const parallaxBg = document.querySelector('.parallax-bg');
            if (parallaxBg) {
                const scrollPosition = window.scrollY;
                parallaxBg.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
            }
        });

        // Floating perfume bottle animations
        document.addEventListener('DOMContentLoaded', function() {
            const perfumeBottles = document.querySelectorAll('.perfume-bottle');
            perfumeBottles.forEach((bottle, index) => {
                bottle.style.animationDelay = `${index * 0.2}s`;
            });
        });
