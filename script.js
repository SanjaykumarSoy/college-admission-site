const popup = document.getElementById('popup');
const applyBtn = document.getElementById('applyBtn');
const closeBtn = document.querySelector('.close');

applyBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Galaxy: Generate random stars for background
function createStars(numStars = 80) {
    let starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.opacity = 0.5 + Math.random() * 0.5;
        star.style.width = star.style.height = (1 + Math.random() * 2) + 'px';
        star.style.animationDuration = (2.5 + Math.random()) + 's';
        starsContainer.appendChild(star);
    }
    document.body.appendChild(starsContainer);
}
createStars();
