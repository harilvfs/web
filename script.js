document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    const sections = document.querySelectorAll('.section');
    
    function checkSections() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('fade-in');
            }
        });
    }
    
    checkSections();
    
    window.addEventListener('scroll', checkSections);
    
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.8;
            
            if (barPosition < screenPosition) {
                const width = bar.getAttribute('data-width') + '%';
                bar.style.width = width;
            }
        });
    }
    
    animateSkillBars();
    
    window.addEventListener('scroll', animateSkillBars);
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = document.getElementById('submitForm');
            submitButton.classList.add('loading');
            
            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                submitButton.classList.remove('loading');
                
                const feedback = document.createElement('div');
                feedback.className = 'form-feedback success';
                feedback.textContent = 'Your message was sent successfully!';
                
                contactForm.after(feedback);
                
                contactForm.reset();
                
                setTimeout(() => {
                    feedback.remove();
                }, 3000);
            })
            .catch(error => {
                submitButton.classList.remove('loading');
                
                const feedback = document.createElement('div');
                feedback.className = 'form-feedback error';
                feedback.textContent = 'There was an error sending your message. Please try again.';
                
                contactForm.after(feedback);
                
                setTimeout(() => {
                    feedback.remove();
                }, 3000);
                
                console.error('Error:', error);
            });
        });
    }
    
    const terminalContentParagraphs = document.querySelectorAll('.terminal-content p');
    terminalContentParagraphs.forEach(paragraph => {
        if (paragraph.textContent.length < 100) {
            paragraph.classList.add('typing-animation');
        }
    });
    
    function equalizeProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        let maxHeight = 0;
        
        projectCards.forEach(card => {
            card.style.height = 'auto';
            const height = card.offsetHeight;
            maxHeight = Math.max(maxHeight, height);
        });
        
        projectCards.forEach(card => {
            card.style.height = maxHeight + 'px';
        });
    }
    
    window.addEventListener('load', equalizeProjectCards);
    window.addEventListener('resize', equalizeProjectCards);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
