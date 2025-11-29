function deleteByEmail() {
    const allTdEmailEls = document.querySelectorAll('tr td:nth-child(2)');
    const inputTextEl = document.querySelector('input[type=text]');
    const divResultEl = document.getElementById('result');

    allTdEmailEls.forEach(tdEl => {
        if (tdEl.textContent === inputTextEl.value.trim()) {
            tdEl.parentElement.remove();
            divResultEl.textContent = 'Deleted.'
        }
        else {
            divResultEl.textContent = 'Not found.'
        }
    });

    
}
