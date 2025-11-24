function colorize() {
    const evenTrEls = document.querySelectorAll('tbody tr:nth-child(even)');

    for (let trEl of evenTrEls) {
        trEl.style.backgroundColor = 'teal';
    }
}