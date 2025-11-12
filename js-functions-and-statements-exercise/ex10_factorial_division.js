function factorialDivision(num1, num2) {
    let firstResult = getFactorial(num1);
    let secondResult = getFactorial(num2);

    console.log((firstResult / secondResult).toFixed(2));

    function getFactorial(num) {
        let result = 1;

        for (let i = 1; i <= num; i++) {
            result *= i
        }

        return result;
    } 
}

factorialDivision(5, 2);
factorialDivision(6, 2);