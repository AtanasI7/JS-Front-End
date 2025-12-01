document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const allControlShowBtnEls = document.querySelectorAll('button');

    for (let controlBtnEl of allControlShowBtnEls) {
        controlBtnEl.addEventListener('click', handleControlShow);
    }

    function handleControlShow(e) {
        const profileFullDivEl = e.target.parentElement;
        const lockedRadioBtnEl = profileFullDivEl.querySelector('.radio-group input[type=radio]');
        const hiddenInfoEl = profileFullDivEl.querySelector('.hidden-fields');

        if (lockedRadioBtnEl.checked) {
            return;
        }

        if (hiddenInfoEl.style.display === 'none') {
            hiddenInfoEl.style.display = 'block';
            e.target.textContent = 'Show less';
        } else {
            hiddenInfoEl.style.display = 'none';
            e.target.textContent = 'Show more';
        }
    }
}