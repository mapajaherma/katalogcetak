// Entrance fade-in for body (handled in CSS)

// Smooth scroll for View Catalog button
document.getElementById('view-catalog-btn').addEventListener('click', function () {
    document.getElementById('produk').scrollIntoView({ behavior: 'smooth' });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);



// WhatsApp button click effect and link generation
document.querySelectorAll('.whatsapp-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-product');
        const message = `Halo Zaki Printing, saya tertarik memesan ${productName}. `;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/6285161887963?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        // Click effect: shrink then back
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});