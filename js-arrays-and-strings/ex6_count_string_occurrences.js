function strOccur(text, searchedWord) {
    let newArr = text.split(' ');

    let occurances = newArr.filter(word => word === searchedWord);

    console.log(occurances.length);   
}

strOccur('This is a word and it also is a sentence', 'is');
strOccur('softuni is great place for learning new programming languages', 'softuni');