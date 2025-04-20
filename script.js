document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        document.querySelector('#themeToggle i')?.classList.replace('fa-moon', 'fa-sun');
    }
    
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.display = 'block';
        footer.style.visibility = 'visible';
        footer.style.opacity = '1';
    }
    
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }

    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('light-theme');
            
            if (themeIcon) {
                if (body.classList.contains('light-theme')) {
                    themeIcon.classList.replace('fa-moon', 'fa-sun');
                    localStorage.setItem('theme', 'light');
                } else {
                    themeIcon.classList.replace('fa-sun', 'fa-moon');
                    localStorage.setItem('theme', 'dark');
                }
            } else {
                localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
            }
        });
    }
    
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
    
    setTimeout(checkSections, 100);
    window.addEventListener('scroll', checkSections);
    
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
                scrollTopBtn.classList.add('animated');
            } else {
                scrollTopBtn.classList.remove('show');
                scrollTopBtn.classList.remove('animated');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            this.classList.add('clicked');
            
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        scrollTopBtn.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        scrollTopBtn.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    }
    
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
                feedback.innerHTML = '<i class="fas fa-check-circle"></i> Your message was sent successfully!';
                
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
                feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i> There was an error sending your message. Please try again.';
                
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
    
    document.querySelectorAll('.terminal-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const container = this.closest('.terminal-container');
            
            if (this.classList.contains('close')) {
                container.style.display = 'none';
            } else if (this.classList.contains('minimize')) {
                const content = container.querySelector('.terminal-content');
                if (content.style.display !== 'none') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            } else if (this.classList.contains('maximize')) {
                if (!container.classList.contains('maximized')) {
                    container.classList.add('maximized');
                    container.style.position = 'fixed';
                    container.style.top = '50%';
                    container.style.left = '50%';
                    container.style.transform = 'translate(-50%, -50%)';
                    container.style.width = '80%';
                    container.style.height = '80%';
                    container.style.zIndex = '9999';
                } else {
                    container.classList.remove('maximized');
                    container.style.position = '';
                    container.style.top = '';
                    container.style.left = '';
                    container.style.transform = '';
                    container.style.width = '';
                    container.style.height = '';
                    container.style.zIndex = '';
                }
            }
        });
    });
    
    document.querySelectorAll('.project-link, button[type="submit"]').forEach(button => {
        button.classList.add('btn-3d');
    });
});
