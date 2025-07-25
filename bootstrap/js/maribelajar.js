// MariBelajar E-Learning Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initCarousel();
    initAnimations();
    initFormValidation();
    initCourseFilter();
    initTestimonials();
    initStatsCounter();
    initCourseCards();
});

// Navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Add active class to current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// Carousel functionality
function initCarousel() {
    const carousel = document.querySelector('#heroCarousel');
    if (carousel) {
        // Auto-play carousel
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true
        });

        // Add pause on hover
        carousel.addEventListener('mouseenter', function() {
            carouselInstance.pause();
        });

        carousel.addEventListener('mouseleave', function() {
            carouselInstance.cycle();
        });
    }
}

// Animation on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .feature-icon, .testimonial-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Form validation
function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        });
    });

    // Real-time validation
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    switch (fieldName) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Masukkan alamat email yang valid';
            }
            break;
        case 'password':
            if (value.length < 6) {
                isValid = false;
                errorMessage = 'Password minimal 6 karakter';
            }
            break;
        case 'confirmPassword':
            const password = document.querySelector('input[name="password"]').value;
            if (value !== password) {
                isValid = false;
                errorMessage = 'Password tidak cocok';
            }
            break;
    }

    showFieldValidation(field, isValid, errorMessage);
}

function showFieldValidation(field, isValid, message) {
    const feedback = field.parentNode.querySelector('.invalid-feedback');
    
    if (isValid) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
        if (feedback) feedback.style.display = 'none';
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
        if (feedback) {
            feedback.textContent = message;
            feedback.style.display = 'block';
        }
    }
}

// Course filter functionality
function initCourseFilter() {
    const filterButtons = document.querySelectorAll('.course-filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter courses
            courseCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Testimonials carousel
function initTestimonials() {
    const testimonialCarousel = document.querySelector('#testimonialCarousel');
    if (testimonialCarousel) {
        new bootstrap.Carousel(testimonialCarousel, {
            interval: 4000,
            wrap: true
        });
    }
}

// Stats counter animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-value'));
                animateCounter(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('#searchInput');
    const searchResults = document.querySelector('#searchResults');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            // Simulate search results
            const results = performSearch(query);
            displaySearchResults(results);
        });
    }
}

function performSearch(query) {
    // This would typically make an API call
    // For now, return mock results
    const mockData = [
        { title: 'Kursus HTML & CSS', category: 'Web Development' },
        { title: 'Belajar JavaScript', category: 'Programming' },
        { title: 'Database MySQL', category: 'Database' },
        { title: 'React.js Fundamentals', category: 'Web Development' }
    ];
    
    return mockData.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );
}

function displaySearchResults(results) {
    const searchResults = document.querySelector('#searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="p-3">Tidak ada hasil ditemukan</div>';
    } else {
        const html = results.map(result => `
            <div class="search-result-item p-3 border-bottom">
                <h6 class="mb-1">${result.title}</h6>
                <small class="text-muted">${result.category}</small>
            </div>
        `).join('');
        
        searchResults.innerHTML = html;
    }
    
    searchResults.style.display = 'block';
}

// Loading states
function showLoading(button) {
    const originalText = button.textContent;
    button.disabled = true;
    button.innerHTML = '<span class="loading"></span> Loading...';
    
    return function() {
        button.disabled = false;
        button.textContent = originalText;
    };
}

// Toast notifications
function showToast(message, type = 'info') {
    const toastContainer = document.querySelector('#toastContainer');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type} border-0`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    toast.addEventListener('hidden.bs.toast', function() {
        toast.remove();
    });
}

// Course cards functionality
function initCourseCards() {
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        // Klik di card (bukan tombol daftar) ke halaman detail
        card.addEventListener('click', function(e) {
            // Jika klik pada tombol Daftar, jangan redirect
            if (e.target.closest('a.btn')) return;
            const href = card.getAttribute('data-href');
            if (href) window.location.href = href;
        });
        // Prevent bubbling pada tombol Daftar
        const daftarBtn = card.querySelector('a.btn');
        if (daftarBtn) {
            daftarBtn.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    });
}

// Export functions for global use
window.MariBelajar = {
    showToast,
    showLoading,
    initSearch
}; 