function sumTable() {
    let tdEvenEls = Array.from(document.querySelectorAll('tbody tr td:nth-child(even)'));
    let sumEl = tdEvenEls.pop();

    let sum = 0;

    for (let tdEl of tdEvenEls) {
        sum += Number(tdEl.textContent);
    }
    
    sumEl.textContent = sum;
}


