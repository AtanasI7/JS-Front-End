function spliter(string) {
    let currentWord = string[0];
    let wordsArr = [];

    for (let i = 1; i < string.length; i++) {
        let currentChar = string[i];

        if (currentChar === currentChar.toUpperCase()){
            wordsArr.push(currentWord);
            currentWord = currentChar;
        }
        else {
            currentWord += currentChar
        }
    }
    
    wordsArr.push(currentWord);
    console.log(wordsArr.join(', '));
    

}

spliter('SplitMeIfYouCanHaHaYouCantOrYouCan');
spliter('HoldTheDoor');
spliter('ThisIsSoAnnoyingToDo');