function solve(array) {
    const numberOfHeroes = array.shift();
    let heroesArr = {};
    // {
    //     "Gus": {"hp": 100, "bullets":" 5"}
    // }


    for (let i = 0; i < numberOfHeroes; i++) {
        const currentHero = array.shift();
        const [name, health, bullets] = currentHero.split(' ');

        heroesArr[name] = {
            health: Number(health),
            bullets: Number(bullets)
        }
    }

    let command = array.shift();

    while (command !== "Ride Off Into Sunset") {

        const data = command.split(' - ');
        const action = data[0];
        const name = data[1];

        if (action === 'FireShot') {
            const target = data[2];

            if (heroesArr[name].bullets !== 0) {
                heroesArr[name].bullets -= 1;
                console.log(`${name} has successfully hit ${target} and now has ${heroesArr[name].bullets} bullets!`);

            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
            }

        } else if (action === 'TakeHit') {
            const damage = data[2];
            const attacker = data[3];

            heroesArr[name].health -= damage;

            if (heroesArr[name].health > 0) {
                console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${heroesArr[name].health} HP!`);

            } else {
                delete heroesArr[name];
                console.log(`${name} was gunned down by ${attacker}!`);
            }

        } else if (action === 'Reload') {
            if (heroesArr[name].bullets < 6) {
                const reloadedBullets = 6 - heroesArr[name].bullets;
                heroesArr[name].bullets += reloadedBullets;
                console.log(`${name} reloaded ${reloadedBullets} bullets!`);

            } else {
                console.log(`${name}'s pistol is fully loaded!`);

            }
        } else if (action === 'PatchUp') {
            let amount = Number(data[2]);

            if (heroesArr[name].health < 100) {

                if (heroesArr[name].health > 100) {
                    amount = 100 - heroesArr[name].health;
                }

                heroesArr[name].health += amount;
                console.log(`${name} patched up and recovered ${amount} HP!`);



            } else {
                console.log(`${name} is in full health!`);

            }
        }
        command = array.shift();
    }

    const heroEntries = Object.entries(heroesArr);

    for (const heroArr of heroEntries) {
        const name = heroArr[0];
        const health = heroArr[1].health;
        const bullets = heroArr[1].bullets;

        console.log(`${name}\n HP: ${health}\n Bullets: ${bullets}`);
    }
}

// solve(([
//     "2",
//     "Gus 100 0",
//     "Walt 100 6",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Gus - 100 - Bandit",
//     "Reload - Walt",
//     "Ride Off Into Sunset"])
// );

// solve(([
//     "2",
//     "Jesse 100 4",
//     "Walt 100 5",
//     "FireShot - Jesse - Bandit",
//     "TakeHit - Walt - 30 - Bandit",
//     "PatchUp - Walt - 20",
//     "Reload - Jesse",
//     "Ride Off Into Sunset"])
// );

solve(([
    "2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"])
);