function addItem() {
    let UlEl = document.getElementById('items');
    const inputTextEl = document.getElementById('newItemText');
    let newLiEl = document.createElement('li');
    let newADeleteEl = document.createElement('a');
    newADeleteEl.textContent = '[Delete]';
    newADeleteEl.href = '#';

    if (inputTextEl.value.trim() !== '') {
        newLiEl.textContent = inputTextEl.value.trim();
        newLiEl.append(newADeleteEl);
        UlEl.append(newLiEl);
        inputTextEl.value = '';
    }

    newADeleteEl.addEventListener('click', deleteElement);

    function deleteElement(e) {
        e.target.parentElement.remove();
    }
}
