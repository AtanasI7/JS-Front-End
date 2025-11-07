/**
 * 
 * @param {String} char1 
 * @param {String} char2 
 * 
 */

function rangeFromCodeToChar(char1, char2) {
    let lettersArr = [];
    let [firstCode, secondCode] = determineSmallestCode(char1, char2)

    for (let i = firstCode + 1; i < secondCode; i++) {
        lettersArr.push(String.fromCharCode(i))
    }

    console.log(lettersArr.join(' '));


    function determineSmallestCode() {
        const code1 = char1.charCodeAt();
        const code2 = char2.charCodeAt();
        
        let firstCode = 0;
        let secondCode = 0;

        if (code1 < code2) {
            firstCode = code1;
            secondCode = code2;
        }

        else {
            firstCode = code2;
            secondCode = code1;
        }

        return [firstCode, secondCode]
    }
}

rangeFromCodeToChar('a', 'd');
rangeFromCodeToChar('#', ':');
rangeFromCodeToChar('C', '#');