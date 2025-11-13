function objToJSON(jsonString) { 
    let personObj = JSON.parse(jsonString)

    let keys = Object.keys(personObj);
    let values = Object.values(personObj);

    for (let i = 0; i < keys.length; i++) {
        console.log(`${keys[i]}: ${values[i]}`); 
    }
    
}

objToJSON('{"name": "George", "age": 40, "town": "Sofia"}');