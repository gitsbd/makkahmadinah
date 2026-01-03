// Main JavaScript for Umrah & Hajj Guide Website
// Bangla language only

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
        if (linkPage === currentPage || (currentPage === '' && linkPage === '/index.html')) {
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

// Share Functionality
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

// Toggle functions for dropdown menus
function toggleGeneralDua(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling;
    const arrow = button.querySelector('span');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        arrow.textContent = '▲';
    } else {
        content.style.display = 'none';
        arrow.textContent = '▼';
    }
}

function toggleDuaCategory(id) {
    const content = document.getElementById(id + '-content');
    if (!content) {
        console.error('Content element not found for id:', id);
        return;
    }
    
    const button = content.previousElementSibling;
    if (!button || !button.classList.contains('dropdown-toggle')) {
        console.error('Button element not found for id:', id);
        return;
    }
    
    const arrow = button.querySelector('span');
    if (!arrow) {
        console.error('Arrow element not found for id:', id);
        return;
    }
    
    // Check if content is currently visible
    const isVisible = content.style.display !== 'none' && 
                     window.getComputedStyle(content).display !== 'none';
    
    if (!isVisible) {
        // Expand
        content.style.display = 'block';
        arrow.textContent = '▲';
        button.classList.add('active');
    } else {
        // Collapse
        content.style.display = 'none';
        arrow.textContent = '▼';
        button.classList.remove('active');
    }
}

// Initialize active states on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set active class for sections that are expanded by default
    const expandedSections = ['start', 'durud', 'fatiha'];
    expandedSections.forEach(function(id) {
        const content = document.getElementById(id + '-content');
        const button = document.querySelector(`button[onclick="toggleDuaCategory('${id}')"]`);
        if (content && button && content.style.display === 'block') {
            button.classList.add('active');
        }
    });
});
