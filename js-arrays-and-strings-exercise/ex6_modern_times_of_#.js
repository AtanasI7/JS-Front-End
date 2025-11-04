function modernTimes(text) {
    const arr = text.split(' ');
    let specialArr = [];
 
    for (let word of arr) {
        if (word.startsWith('#')) {
            if (word.length > 1) {
                if (!(/\d/.test(word))) {
                    specialArr.push(word.replace('#', ''))
                }
            }
        }
    }
 
    console.log(specialArr.join('\n')); 
}
 
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');