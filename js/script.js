document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const nav = document.querySelector('nav');
    const topBar = document.querySelector('.top-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
            if (topBar) topBar.style.transform = 'translateY(-100%)';
        } else {
            nav.classList.remove('scrolled');
            if (topBar) topBar.style.transform = 'translateY(0)';
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');

                // Trigger stats counter if element is a stat card
                if (el.classList.contains('stat-card') && !el.dataset.counted) {
                    startCounter(el);
                }
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Stats Counter Function
    function startCounter(el) {
        const countEl = el.querySelector('.count');
        const target = parseInt(el.dataset.target);
        let current = 0;
        const duration = 2000;
        const stepTime = 20;
        const increment = target / (duration / stepTime);

        el.dataset.counted = "true";

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                countEl.innerText = target;
                clearInterval(timer);
            } else {
                countEl.innerText = Math.ceil(current);
            }
        }, stepTime);
    }

    // Program Search Filter
    const programSearch = document.getElementById('programSearch');
    const programRows = document.querySelectorAll('.program-table tbody tr');

    if (programSearch) {
        programSearch.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            programRows.forEach(row => {
                const text = row.innerText.toLowerCase();
                if (text.includes(term)) {
                    row.style.display = '';
                    row.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // Admission/Contact Form Validation
    const commonForm = document.getElementById('admissionForm') || document.getElementById('contactForm');
    if (commonForm) {
        commonForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const inputs = commonForm.querySelectorAll('input[required], textarea[required], select[required]');
            inputs.forEach(input => {
                const errorSpan = input.nextElementSibling;
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    if (errorSpan && errorSpan.classList.contains('error-msg')) {
                        errorSpan.innerText = 'This field is required';
                    }
                } else {
                    input.classList.remove('error');
                    if (errorSpan && errorSpan.classList.contains('error-msg')) {
                        errorSpan.innerText = '';
                    }
                }
            });

            // Email validation
            const emailInput = commonForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!re.test(emailInput.value)) {
                    isValid = false;
                    emailInput.classList.add('error');
                    const errorSpan = emailInput.nextElementSibling;
                    if (errorSpan) errorSpan.innerText = 'Invalid email address';
                }
            }

            if (isValid) {
                const btn = commonForm.querySelector('button');
                const originalContent = btn.innerHTML;
                btn.innerHTML = 'Submitting... <span class="loader"></span>';
                btn.disabled = true;

                setTimeout(() => {
                    commonForm.innerHTML = `
                        <div class="success-message reveal active" style="text-align:center; padding: 4rem 2rem;">
                            <div style="font-size: 5rem; color: var(--primary-color); margin-bottom: 2rem;">✓</div>
                            <h2 style="margin-bottom: 1rem;">Submission Successful</h2>
                            <p style="color: var(--text-muted);">Thank you. Our team will review your information and get back to you shortly.</p>
                            <br>
                            <a href="index.html" class="btn btn-primary">Return to Homepage</a>
                        </div>
                    `;
                }, 2000);
            }
        });
    }
});

// Video Player — Replace thumbnail with YouTube iframe
function playVideo(container) {
    // Replace with your actual YouTube video ID
    const youtubeVideoId = 'dQw4w9WgXcQ';
    container.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    `;
}
