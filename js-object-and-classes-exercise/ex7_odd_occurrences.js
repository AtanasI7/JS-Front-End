function solve(array) {
    let occurrences = {};

    for (let word of array.toLowerCase().split(' ')) {
        if (!occurrences.hasOwnProperty(word)) occurrences[word] = 1;
        else occurrences[word] += 1; 
    }

    const result = Object.keys(occurrences).filter(w => occurrences[w] % 2 !== 0)

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// solve('Cake IS SWEET is Soft CAKE sweet Food');