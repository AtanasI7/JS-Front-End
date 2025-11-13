function cityInfo(cityObj) {
    let entries = Object.entries(cityObj);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});