function solve(arr) {
    let heroes = [];

    for (let heroInfo of arr) {
        let [name, level, items] = heroInfo.split(' / ');
        if (items == undefined) {
            items = [];
        } else {
            items = items.split(', ');
        }

        const heroObj = {
            name: name,
            level: Number(level),
            items: items
        }

        heroes.push(heroObj);
    }
  
    heroes = heroes.sort((a, b) => a["level"] - b["level"]);

    for (let hero of heroes) {
        console.log(`Hero: ${hero["name"]}`);
        console.log(`level => ${hero["level"]}`);
        console.log(`items => ${hero["items"].join(', ')}`);
    }
}

solve([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
