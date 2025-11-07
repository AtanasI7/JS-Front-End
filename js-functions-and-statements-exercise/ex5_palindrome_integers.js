/**
 * 
 * @param {Array} numArr 
 * 
 */

function checkNumPalindrome(numArr) {

    for (let num of numArr) {
        let stringNum = String(num);
        let reversedStringNum = reverseNum(stringNum)

        if (stringNum === reversedStringNum) console.log(true);
        else console.log(false);
        
    }

    function reverseNum(stringNum) {
        return stringNum.split('').reverse().join('');
    }
}

checkNumPalindrome([123,323,421,121]);
checkNumPalindrome([32, 2, 232, 1010]);