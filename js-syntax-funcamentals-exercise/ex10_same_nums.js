function sameNumbers(num) {
    let lastDigit = num % 10;
    let sumOfDigits = lastDigit;
    let sameFlag = true;

    num = Math.floor(num / 10);

    while (num !== 0) {
        let beforeLast = num % 10;

        if (beforeLast === lastDigit) {
            let a = 5;
        }
        else {
            sameFlag = false;
        }

        sumOfDigits += beforeLast;
        num = Math.floor(num / 10);
    }

    console.log(sameFlag);
    console.log(sumOfDigits);
}

sameNumbers(2222222);
sameNumbers(1234);