function toggle() {
    const btnEl = document.getElementsByClassName('button')[0];
    const bonusTextEl = document.getElementById('extra');
    
    if (btnEl.textContent === 'More') {
        bonusTextEl.style.display = 'block';
        btnEl.textContent = 'Less';
    }
    else if (btnEl.textContent === 'Less') {
        bonusTextEl.style.display = 'none';
        btnEl.textContent = 'More';
    }
}