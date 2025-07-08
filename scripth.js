window.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slidesContainer = document.querySelector('.slides');
    const prevBtn = document.querySelector('.slide-btn.prev');
    const nextBtn = document.querySelector('.slide-btn.next');
    let autoSlideInterval;

    function showSlide(index) {
        const newIndex = (index + totalSlides) % totalSlides;
        const offset = -newIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
        currentSlide = newIndex;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // ปุ่ม prev ก็ให้เลื่อนไปทางซ้ายเหมือน next
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // เริ่มต้น
    showSlide(0);
    startAutoSlide();

    // Card flip for product detail
    document.querySelectorAll('.product-card.flip-card').forEach(card => {
        card.querySelector('.detail-btn:not(.back-btn)').addEventListener('click', function (e) {
            card.classList.add('flipped');
        });
        card.querySelector('.back-btn').addEventListener('click', function (e) {
            card.classList.remove('flipped');
        });
    });
});