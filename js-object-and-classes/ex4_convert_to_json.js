function convertToJSON(name, lastName, hairColor) {
    let personObj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let jsonPerson = JSON.stringify(personObj);

    console.log(jsonPerson);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');