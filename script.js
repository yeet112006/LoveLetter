// Add a subtle tilt effect on hover (disabled on mobile)
const letter = document.querySelector('.letter');
const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (!isMobile) {
    letter.addEventListener('mousemove', (e) => {
        const rect = letter.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 40;
        const rotateY = (centerX - x) / 40;
        
        letter.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    letter.addEventListener('mouseleave', () => {
        letter.style.transform = 'perspective(1500px) rotateX(0) rotateY(0)';
    });
}