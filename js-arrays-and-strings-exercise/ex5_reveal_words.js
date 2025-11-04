function revealWords(words, sentence) {
    let specialWords = words.split(', ').sort((a, b) => b.length - a.length)

    for (let word of specialWords) {
        sentence = sentence.replace('*'.repeat(word.length), word)
    }

    console.log(sentence);
}


revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');