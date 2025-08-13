const popup = document.getElementById('popup');
const applyBtn = document.getElementById('applyBtn');
const closeBtn = document.querySelector('.close');

applyBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Optional: close popup when clicking outside popup-content
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
