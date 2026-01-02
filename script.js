// Language Toggle Function
let currentLanguage = 'bn'; // Bengali is default

function toggleLanguage() {
    // This is a placeholder for future language toggle functionality
    // For now, it shows an alert
    if (currentLanguage === 'bn') {
        alert('English version coming soon! / ইংরেজি সংস্করণ শীঘ্রই আসছে!');
    } else {
        currentLanguage = 'bn';
    }
}

// Smooth Scroll for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active state to navigation links based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all process steps and feature cards
    const animatedElements = document.querySelectorAll('.process-step, .feature-card, .dua-item, .guide-category');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Print Functionality
function printPage() {
    window.print();
}

// Share Functionality (for future implementation)
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'উমরাহ ও হজ্জ গাইড',
            text: 'বাংলাদেশী মুসলমানদের জন্য উমরাহ ও হজ্জ গাইড',
            url: window.location.href
        }).catch(err => console.log('Error sharing', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('লিঙ্ক কপি করা হয়েছে!');
        });
    }
}

