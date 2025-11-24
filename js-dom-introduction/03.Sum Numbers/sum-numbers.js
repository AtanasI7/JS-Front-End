function calc() {
    const num1El = document.getElementById('num1');
    const num2El = document.getElementById('num2');
    const sum = document.getElementById('sum');

    sum.value = Number(num1El.value) + Number(num2El.value);
}