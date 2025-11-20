function solve(input) {
    let dictionary = {};

    for (let jsonStr of input) {
        let infoObj = JSON.parse(jsonStr);

        let entries = Object.entries(infoObj);

        dictionary[entries[0][0]] = entries[0][1]
    }

    let dictionaryEntries = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]))
    
    for (let [term, definition] of dictionaryEntries) {
        console.log(`Term: ${term} => Definition: ${definition}`);
        
    }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);










// function solve(input) {
//     let dictionary = {};

//     for (let jsonStr of input) {
//         let newObject = JSON.parse(jsonStr);
//         let entries = Object.entries(newObject);

//         dictionary[entries[0][0]] = entries[0][1];
//     }

//     let entries = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));

//     for (let [term, definition] of entries) {
//         console.log(`Term: ${term} => Definition: ${definition}`);
        
//     }
// }