/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c 
 */

function addNSubtract(a, b, c) {
    function sum(a, b) {
        return a + b;
    }

    function subtract () {
        return sum(a, b) - c
    }

    console.log(subtract());
    
}

addNSubtract(23, 6, 10);
addNSubtract(1, 17, 30);
addNSubtract(42, 58, 100);