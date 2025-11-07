/**
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 */

function findSmallestNumber(a, b, c) {
    let smallestNumber = a;

    if (b < smallestNumber) smallestNumber = b;
    if (c < smallestNumber) smallestNumber = c;

    console.log(smallestNumber);
    
}

findSmallestNumber(2, 5, 3);
findSmallestNumber(11, 9, 5);
findSmallestNumber(4, 5, 9);