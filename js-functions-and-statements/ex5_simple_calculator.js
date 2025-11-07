function calculator(num1, num2, operator) {
    let result = 0;

    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;


    if (operator === 'multiply') result = multiply(num1, num2)
    else if (operator === 'divide') result = divide(num1, num2)
    else if (operator === 'add') result = add(num1, num2)
    else if (operator === 'subtract') result = subtract(num1, num2)

    console.log(result);
    
}

calculator(5, 5, 'multiply');
calculator(40, 8, 'divide');