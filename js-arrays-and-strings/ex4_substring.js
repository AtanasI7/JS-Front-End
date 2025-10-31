function someTask(word, startIndex, count) {
    let newWord = word.substring(startIndex, startIndex + count)

    console.log(newWord);
    
}

someTask('ASentence', 1, 8);
someTask('SkipWord', 4, 7);