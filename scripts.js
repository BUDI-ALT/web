function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const loveButton = document.getElementById('loveButton');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const newContent = document.querySelector('.new-content');

    loveButton.addEventListener('click', (e) => {
        e.preventDefault();
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
        newContent.classList.remove('hidden');
        setInterval(createHeart, 300);  // Contoh tambahan: memanggil createHeart setiap 300ms
    });
});
