function solve() {
    const decimalNumberinputEl = document.getElementById('input');
    const selectConvertionToEl = document.getElementById('selectMenuTo');
    const resultEl = document.getElementById('result');

    const number = Number(decimalNumberinputEl.value.trim());
    const convertType = selectConvertionToEl.value;

    if (convertType === 'binary') {
        resultEl.value = number.toString(2);
    }
    else if (convertType === 'hexadecimal') {
        resultEl.value = number.toString(16).toUpperCase();
    }
}