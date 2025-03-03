// Set current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Accounting for header height
                behavior: 'smooth'
            });
        }
    });
});

// Add a simple fade-in animation for the profile
document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.querySelector('.profile-container');
    
    if (profileContainer) {
        profileContainer.style.opacity = '0';
        profileContainer.style.transform = 'translateY(20px)';
        profileContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            profileContainer.style.opacity = '1';
            profileContainer.style.transform = 'translateY(0)';
        }, 200);
    }
});