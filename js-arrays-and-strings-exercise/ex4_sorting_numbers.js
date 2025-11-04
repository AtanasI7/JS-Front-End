function sortingNumbers(arr) {
    arr = arr.sort((a, b) => a - b)
    let newArr = [];


    while (arr.length > 0) {
        let firstEl = arr.shift();
        newArr.push(firstEl)

        let lastEl = arr.pop();
        newArr.push(lastEl)
    }
 
    return newArr

}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

