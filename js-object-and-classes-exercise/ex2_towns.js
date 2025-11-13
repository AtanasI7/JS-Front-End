function townsLocations(townsInfo) {
    let townsArr = [];

    for (const town of townsInfo) {
        const [name, latitude, longitude] = town.split(' | ');
        const townObj = { town: name, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) };

        townsArr.push(townObj);
    }

    for (let town of townsArr) {
        console.log(town);
    }
}

townsLocations(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);