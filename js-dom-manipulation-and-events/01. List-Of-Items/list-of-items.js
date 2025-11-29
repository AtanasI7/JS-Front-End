function addItem() {
    let ulEl = document.getElementById('items');
    const inputTextEl = document.getElementById('newItemText');
    let newLiEl = document.createElement('li');

    const textValue = inputTextEl.value;
    newLiEl.textContent = textValue;

    if (textValue !== '') {
        ulEl.append(newLiEl);
        inputTextEl.value = '';
    }
}
