document.querySelectorAll('.floating-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        let category = '';
        const label = card.textContent.trim().toLowerCase();

        if (label.includes('full-stack')) category = 'fullstack';
        else if (label.includes('machine learning')) category = 'ml';
        else if (label.includes('data science')) category = 'data';

        if (category) {
            const allCards = document.querySelectorAll('.experience-card');
            let targetCard = null;
            const matchingCards = [];

            allCards.forEach(c => {
                const dataCat = c.getAttribute('data-category');
                const isMatch =
                    dataCat === category ||
                    (category === 'ml' && dataCat.includes('ml')) ||
                    (category === 'data' && dataCat.includes('data'));

                if (isMatch) {
                    matchingCards.push(c);
                    if (!targetCard) targetCard = c; // scroll to first match
                }
            });

            if (targetCard) {
                // Scroll to first matching card
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const scrollY = window.scrollY;
                const elementTop = targetCard.getBoundingClientRect().top;
                const absoluteTop = scrollY + elementTop;
                const buffer = 20;

                window.scrollTo({
                    top: absoluteTop - navbarHeight - buffer,
                    behavior: 'smooth'
                });

                // Highlight matched cards and fade others
                allCards.forEach(card => {
                    card.style.transition = 'all 0.5s ease';
                    if (matchingCards.includes(card)) {
                        card.style.opacity = '1';
                        card.style.boxShadow = '0 0 20px rgba(0, 128, 255, 0.3)';
                        card.style.transform = 'translateY(-5px) scale(1.03)';
                    } else {
                        card.style.opacity = '0.3';
                    }
                });

            } else {
                console.warn(`[ScrollTo] No matching card found for category "${category}"`);
            }
        }
    });
});

// Add counter animation for stats
function animateCounter(element, target, duration = 500) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.about-stats').forEach(stats => {
    statsObserver.observe(stats);
});

// Reset experience card filtering when scrolling away from experience section
const experienceSection = document.querySelector('#experience');
if (experienceSection) {
    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // Reset all experience cards when scrolling away from experience section
                const allCards = document.querySelectorAll('.experience-card');
                allCards.forEach(card => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.boxShadow = '';
                    card.style.transform = '';
                });
            }
        });
    }, { threshold: 0.1 }); // Reset when less than 10% of section is visible
    
    experienceObserver.observe(experienceSection);
}

// Smooth scrolling for navigation links and buttons
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});