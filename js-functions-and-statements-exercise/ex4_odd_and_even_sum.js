/**
 * 
 * @param {Number} number 
 */

function evenOddSum(number) {
    const stringNum = String(number);
    let evenSum = 0;
    let oddSum = 0;


    for (let i = 0; i < stringNum.length; i++) {
        let num = Number(stringNum[i]);

        if (num % 2 === 0) evenSum += num
        else oddSum += num
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

evenOddSum(1000435);
evenOddSum(3495892137259234);
