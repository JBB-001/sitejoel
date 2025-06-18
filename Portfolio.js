// script.js
document.addEventListener('DOMContentLoaded', function() {
   
 
document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('active');
});



    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Merci pour votre message ! Je vous répondrai dès que possible.');
            
            contactForm.reset();
        });
    }
});