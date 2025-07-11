// // Navigation Toggle
// const navToggle = document.getElementById('nav-toggle');
// const navMenu = document.getElementById('nav-menu');

// navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
// });

// // Close mobile menu when clicking on a link
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//         navMenu.classList.remove('active');
//     });
// });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             const offsetTop = target.offsetTop - 64; // Account for fixed navbar
//             window.scrollTo({
//                 top: offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Navbar background on scroll
// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.style.background = 'rgba(255, 255, 255, 0.98)';
//         navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
//     } else {
//         navbar.style.background = 'rgba(255, 255, 255, 0.95)';
//         navbar.style.boxShadow = 'none';
//     }
// });

// // Intersection Observer for animations
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, observerOptions);

// // Observe all sections for animations
// document.querySelectorAll('section').forEach(section => {
//     section.style.opacity = '0';
//     section.style.transform = 'translateY(30px)';
//     section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     observer.observe(section);
// });

// // Animate skill tags on hover
// document.querySelectorAll('.skill-tag').forEach(tag => {
//     tag.addEventListener('mouseenter', () => {
//         tag.style.transform = 'scale(1.05)';
//     });
    
//     tag.addEventListener('mouseleave', () => {
//         tag.style.transform = 'scale(1)';
//     });
// });

// // Animate project cards
// document.querySelectorAll('.project-card').forEach(card => {
//     card.addEventListener('mouseenter', () => {
//         card.style.transform = 'translateY(-8px) scale(1.02)';
//     });
    
//     card.addEventListener('mouseleave', () => {
//         card.style.transform = 'translateY(0) scale(1)';
//     });
// });

// // Animate experience cards
// document.querySelectorAll('.experience-card').forEach(card => {
//     card.addEventListener('mouseenter', () => {
//         card.style.transform = 'translateY(-8px) scale(1.02)';
//     });
    
//     card.addEventListener('mouseleave', () => {
//         card.style.transform = 'translateY(0) scale(1)';
//     });
// });

// // Add loading animation for the page
// window.addEventListener('load', () => {
//     document.body.style.opacity = '0';
//     document.body.style.transition = 'opacity 0.5s ease';
    
//     setTimeout(() => {
//         document.body.style.opacity = '1';
//     }, 100);
// });

// // Typing effect for hero subtitle
// function typeWriter(element, text, speed = 100) {
//     let i = 0;
//     element.innerHTML = '';
    
//     function type() {
//         if (i < text.length) {
//             element.innerHTML += text.charAt(i);
//             i++;
//             setTimeout(type, speed);
//         }
//     }
    
//     type();
// }

// // Initialize typing effect when page loads
// window.addEventListener('load', () => {
//     const subtitle = document.querySelector('.hero-subtitle');
//     const originalText = subtitle.textContent;
//     setTimeout(() => {
//         typeWriter(subtitle, originalText, 80);
//     }, 1000);
// });

// // Add parallax effect to hero section
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroGraphic = document.querySelector('.hero-graphic');
    
//     if (heroGraphic) {
//         heroGraphic.style.transform = `translateY(${scrolled * 0.1}px)`;
//     }
// });

// // Add active state to navigation links based on scroll position
// window.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('section[id]');
//     const scrollPosition = window.scrollY + 100;

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         const sectionId = section.getAttribute('id');
//         const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             document.querySelectorAll('.nav-link').forEach(link => {
//                 link.classList.remove('active');
//             });
//             if (navLink) {
//                 navLink.classList.add('active');
//             }
//         }
//     });
// });

// // Add CSS for active nav link
// const style = document.createElement('style');
// style.textContent = `
//     .nav-link.active {
//         color: var(--primary-600) !important;
//     }
    
//     .nav-link.active::after {
//         width: 100% !important;
//     }
// `;
// document.head.appendChild(style);

// // Add stagger animation to skill items
// function staggerAnimation(elements, delay = 100) {
//     elements.forEach((element, index) => {
//         element.style.opacity = '0';
//         element.style.transform = 'translateY(20px)';
//         element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
//         setTimeout(() => {
//             element.style.opacity = '1';
//             element.style.transform = 'translateY(0)';
//         }, index * delay);
//     });
// }

// // Observe skill categories for stagger animation
// const skillObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const skillTags = entry.target.querySelectorAll('.skill-tag');
//             staggerAnimation(skillTags, 50);
//             skillObserver.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.5 });

// document.querySelectorAll('.skill-category').forEach(category => {
//     skillObserver.observe(category);
// });

// // Add counter animation for stats
// function animateCounter(element, target, duration = 2000) {
//     let start = 0;
//     const increment = target / (duration / 16);
    
//     function updateCounter() {
//         start += increment;
//         if (start < target) {
//             element.textContent = Math.floor(start) + '+';
//             requestAnimationFrame(updateCounter);
//         } else {
//             element.textContent = target + '+';
//         }
//     }
    
//     updateCounter();
// }

// // Observe stats for counter animation
// const statsObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const statNumbers = entry.target.querySelectorAll('.stat-number');
//             statNumbers.forEach(stat => {
//                 const target = parseInt(stat.textContent);
//                 animateCounter(stat, target);
//             });
//             statsObserver.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.5 });

// document.querySelectorAll('.about-stats').forEach(stats => {
//     statsObserver.observe(stats);
// });

// // Add floating animation to hero cards with different delays
// document.querySelectorAll('.floating-card').forEach((card, index) => {
//     card.style.animationDelay = `${index * 0.5}s`;
// });

// // Add scroll progress indicator
// const progressBar = document.createElement('div');
// progressBar.style.cssText = `
//     position: fixed;
//     top: 64px;
//     left: 0;
//     width: 0%;
//     height: 3px;
//     background: linear-gradient(90deg, var(--primary-600), var(--secondary-600));
//     z-index: 1000;
//     transition: width 0.1s ease;
// `;
// document.body.appendChild(progressBar);

// window.addEventListener('scroll', () => {
//     const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
//     progressBar.style.width = `${scrollProgress}%`;
// });

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

                // Reset after 3 seconds
                setTimeout(() => {
                    allCards.forEach(card => {
                        card.style.opacity = '';
                        card.style.boxShadow = '';
                        card.style.transform = '';
                    });
                }, 3000);
            } else {
                console.warn(`[ScrollTo] No matching card found for category "${category}"`);
            }
        }
    });
});

// Add counter animation for stats
function animateCounter(element, target, duration = 100) {
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