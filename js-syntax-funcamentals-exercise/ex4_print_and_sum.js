function Sum(num1, num2) {
    let sequence = '';
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sequence += `${i} `
        sum += i
    }

    console.log(sequence.trimEnd())
    console.log(`Sum: ${sum}`)
}

Sum(0, 26); 