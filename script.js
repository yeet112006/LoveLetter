// Add a subtle tilt effect on hover
const letter = document.querySelector('.letter');

letter.addEventListener('mousemove', (event) => {
    const rectangle = letter.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;
    
    const centerX = rectangle.width / 2;
    const centerY = rectangle.height / 2;
    
    const rotateX = (y - centerY) / 40;
    const rotateY = (centerX - x) / 40;
    
    letter.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

letter.addEventListener('mouseleave', () => {
    letter.style.transform = 'perspective(1500px) rotateX(0) rotateY(0)';
});