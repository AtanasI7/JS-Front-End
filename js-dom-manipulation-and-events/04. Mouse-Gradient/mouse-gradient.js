function attachGradientEvents() {
    const divHoverEl = document.getElementById('gradient');
    const divResultEl = document.getElementById('result');

    divHoverEl.addEventListener('mousemove', givePercent);

    function givePercent(e) {
        const cursorDistanceFromLeft = e.offsetX;
        const divElWidth = e.target.clientWidth;

        let percent = Math.floor(cursorDistanceFromLeft / divElWidth * 100)

        divResultEl.textContent = `${percent}%`
    }
}
