function perfectNumCheck(num) {
    let goodDivisors = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            goodDivisors += i;
        }
    }

    if (goodDivisors === num) {
        console.log(`We have a perfect number!`);
    }
    else {
        console.log(`It's not so perfect.`);
        
    }
}

perfectNumCheck(6);
perfectNumCheck(28);