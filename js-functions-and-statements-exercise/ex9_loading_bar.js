function loadingBar(fullNum) {
    let pattern
    let num = fullNum / 10;

    if (num === 10) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }
    else {
        pattern = patternCreator(num);

        console.log(`${fullNum}% ${pattern}`)
        console.log(`Still loading...`)
    }

    function patternCreator(num) {
        return `[${'%'.repeat(num)}${'.'.repeat(10 - num)}]`
    }
}

loadingBar(30);
loadingBar(100);
loadingBar(60);