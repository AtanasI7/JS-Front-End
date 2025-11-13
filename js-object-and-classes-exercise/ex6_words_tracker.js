function solve(array) {
    let occurrencesNum = {};
    const searchedWords = array[0].split(' ');

    searchedWords.forEach((w) => {
        occurrencesNum[w] = 0
    })
    
    for (let i = 1; i < array.length; i++) {
        let item = array[i];

        if (occurrencesNum.hasOwnProperty(item)) {
            occurrencesNum[item]++;
        }
    }

    const entries = Object.entries(occurrencesNum).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);