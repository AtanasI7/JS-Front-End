function stringSubstring(specialWord, text) {
    const arrText = text.split(' ');
    let flag = false;

    for (const word of arrText) {
        if (word.toLowerCase() === specialWord) {
            console.log(specialWord);
            flag = true;
            break;
        }
    }

    if (!flag) {
        console.log(`${specialWord} not found!`);
        
    }
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');