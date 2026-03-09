// Product Detail Page Functions
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput && parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

function addToCart() {
    alert('Product added to cart successfully!');
    // Update cart badge
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        cartBadge.textContent = parseInt(cartBadge.textContent) + 1;
    }
}

// Size and Color Selection
document.addEventListener('DOMContentLoaded', function() {
    // Size button selection
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Color button selection
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            colorButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Account Page Tab Switching
function switchTab(tabName) {
    // Hide all tabs
    document.getElementById('profile-tab').style.display = 'none';
    document.getElementById('orders-tab').style.display = 'none';
    document.getElementById('addresses-tab').style.display = 'none';

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab and activate button
    document.getElementById(tabName + '-tab').style.display = 'block';
    event.target.classList.add('active');
}

// Contact Form Submission
function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Profile Form Submission
function handleProfileSubmit(event) {
    event.preventDefault();
    alert('Profile updated successfully!');
}

// Checkout Functions
function handleShippingSubmit(event) {
    event.preventDefault();
    
    // Hide shipping form
    document.getElementById('shipping-form').style.display = 'none';
    
    // Show payment form
    document.getElementById('payment-form').style.display = 'block';
    
    // Update step indicators
    document.getElementById('step2-indicator').style.background = 'var(--primary-color)';
    document.getElementById('step2-indicator').style.color = 'white';
    document.getElementById('step2-text').style.color = 'var(--primary-color)';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToShipping() {
    // Show shipping form
    document.getElementById('shipping-form').style.display = 'block';
    
    // Hide payment form
    document.getElementById('payment-form').style.display = 'none';
    
    // Update step indicators
    document.getElementById('step2-indicator').style.background = 'var(--gray-300)';
    document.getElementById('step2-indicator').style.color = 'black';
    document.getElementById('step2-text').style.color = 'var(--gray-400)';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handlePaymentSubmit(event) {
    event.preventDefault();
    alert('Order placed successfully! Thank you for your purchase.');
    window.location.href = 'index.html';
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Cart Remove Functionality
document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Are you sure you want to remove this item from your cart?')) {
                this.closest('.cart-item').remove();
                
                // Update cart badge
                const cartBadge = document.querySelector('.cart-badge');
                if (cartBadge && parseInt(cartBadge.textContent) > 0) {
                    cartBadge.textContent = parseInt(cartBadge.textContent) - 1;
                }
                
                // Check if cart is empty
                const cartItems = document.querySelectorAll('.cart-item');
                if (cartItems.length === 0) {
                    document.querySelector('.cart-layout').style.display = 'none';
                    document.querySelector('.empty-cart').style.display = 'block';
                }
            }
        });
    });
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

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.product-card, .feature-item, .testimonial-card, .value-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
