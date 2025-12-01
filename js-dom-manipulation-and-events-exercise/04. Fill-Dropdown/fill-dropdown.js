document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const submitBtnEl = document.querySelector('input[type=submit]');
    
    submitBtnEl.addEventListener('click', addInfoToOptions);
    
    function addInfoToOptions(e) {
        e.preventDefault();
        const formEl = e.target.parentElement;
        const articleEl = formEl.parentElement;
        const menuEl = articleEl.querySelector('#menu');
        
        const itemTextEl = formEl.querySelector('#newItemText');
        const itemValueEl = formEl.querySelector('#newItemValue');

        let newOptionEl = document.createElement('option');
        newOptionEl.value = itemValueEl.value.trim();
        newOptionEl.textContent = itemTextEl.value.trim();

        menuEl.append(newOptionEl);
        itemValueEl.value = '';
        itemTextEl.value = '';
    }
}