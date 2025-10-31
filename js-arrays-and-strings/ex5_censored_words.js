function censoredWords(text, specialWord) {
    let starWord = '*'.repeat(specialWord.length)

    let newText = text.replaceAll(specialWord, starWord);

    console.log(newText);

}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');