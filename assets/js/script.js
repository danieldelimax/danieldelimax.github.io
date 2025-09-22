document.addEventListener('DOMContentLoaded', () => {
    const handleScrollAnimation = () => {
        const elements = document.querySelectorAll('.fade-in-up, .slide-in-right, .slide-in-left');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) translateX(0)';
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    handleScrollAnimation();
});