function signCheck(numOne, numTwo, numThree) {
    let checker = 0;

    if (numOne < 0) checker++;
    if (numTwo < 0) checker++;
    if (numThree < 0) checker++;
    
    if (checker % 2 === 0) console.log(`Positive`);
    else console.log(`Negative`);
    
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);