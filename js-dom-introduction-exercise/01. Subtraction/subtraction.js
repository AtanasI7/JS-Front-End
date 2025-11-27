function subtract() {
    const firstField = document.getElementById('firstNumber');
    const secondField = document.getElementById('secondNumber');
    const resultField = document.getElementById('result');

    resultField.textContent = Number(firstField.value) - Number(secondField.value);
}