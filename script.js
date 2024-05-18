document.addEventListener('mousemove', (event) => {
    const worm = document.getElementById('worm');
    const wormRect = worm.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = wormRect.left + wormRect.width / 2;
    const centerY = wormRect.top + wormRect.height / 2;
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    // Adjust these values to control the distortion effect
    const maxRotation = 20; // Maximum rotation in degrees
    const maxSkew = 30; // Maximum skew in degrees
    const maxScale = 1.2; // Maximum scale

    const rotation = (deltaX / centerX) * maxRotation;
    const skewX = (deltaX / centerX) * maxSkew;
    const skewY = (deltaY / centerY) * maxSkew;
    const scale = 1 + (Math.sqrt(deltaX**2 + deltaY**2) / Math.sqrt(centerX**2 + centerY**2)) * (maxScale - 1);

    worm.style.transform = `rotate(${rotation}deg) skew(${skewX}deg, ${skewY}deg) scale(${scale})`;
});

document.addEventListener('mouseleave', () => {
    const worm = document.getElementById('worm');
    worm.style.transform = 'rotate(0deg) skew(0deg, 0deg) scale(1)';
});
