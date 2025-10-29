function sumDigits(num) {
    let result = 0;

    while (num !== 0) {
        let lastDigit = num % 10;
        num = Math.floor(num / 10);
        result += lastDigit;
    }

    console.log(result)
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);