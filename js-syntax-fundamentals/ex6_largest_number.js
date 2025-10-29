function largestNum(num1, num2, num3) {
    let biggestNum = num1

    if (num2 > biggestNum) {
        biggestNum = num2;
    }

    if (num3 > biggestNum) {
        biggestNum = num3;
    }

    console.log(`The largest number is ${biggestNum}.`)
}

largestNum(-2, 9, 3);