function solve(array) {
    const num = array.shift();
    let wizards = {};

    // {
    //     Harry Potter: {
    //         spells: [
    //             Lumos,
    //             Wingardium Leviosa
    //         ],
    //         mana: 80
    //     }
    // }

    for (let i = 0; i < num; i++) {
        const [name, spellsStr, manaStr] = array.shift().split('-');
        const mana = Number(manaStr);
        const spells = spellsStr.split(',');
        wizards[name] = {
            spells,
            mana
        };
    }

    let command = array.shift();

    while (command !== 'Spell Concluded!') {
        const infoArr = command.split(' * ');
        const action = infoArr.shift();
        const studentName = infoArr.shift();

        if (wizards[studentName].mana > 0) {
            if (action === 'Cast Spell') {
                const currentSpell = infoArr.shift();
                const manaRequired = Number(infoArr.shift());

                if (wizards[studentName].spells.includes(currentSpell)) {
                    if (manaRequired <= wizards[studentName].mana) {
                        wizards[studentName].mana -= manaRequired;
                        console.log(`${studentName} successfully cast ${currentSpell} and now has ${wizards[studentName].mana} mana!`);
                    } else {
                        console.log(`${studentName} cannot cast ${currentSpell} due to lack of Spell or mana!`);
                    }
                } else {
                    console.log(`${studentName} cannot cast ${currentSpell} due to lack of Spell or mana!`);
                }
            }

            if (action == 'Meditate') {
                const manaRecovered = Number(infoArr.shift());

                if (wizards[studentName].mana === 100) {
                    console.log(`${studentName} is already at full mana!`);
                    
                } else {
                    if (wizards[studentName].mana + manaRecovered > 100) {
                        const actualManaRecover = 100 - wizards[studentName].mana;
                        wizards[studentName].mana += actualManaRecover;
                        console.log(`${studentName} meditated and recovered ${actualManaRecover} mana!`);
                    } else {
                        wizards[studentName].mana += manaRecovered;
                        console.log(`${studentName} meditated and recovered ${manaRecovered} mana!`); 
                    }
                }
            }

            if (action === 'Learn') {
                const newSpell = infoArr.shift();
                if (wizards[studentName].spells.includes(newSpell)) {
                    console.log(`${studentName} already knows ${newSpell}.`);
                    
                } else {
                    wizards[studentName].spells.push(newSpell);
                    console.log(`${studentName} has learned ${newSpell}!`);
                }
            }
        }
        command = array.shift();
    }

    const entries = Object.entries(wizards);

    for (const entry of entries) {
        console.log(`Student: ${entry[0]}`);
        console.log(`- Spells: ${entry[1].spells.join(', ')}`);
        console.log(`- Mana: ${entry[1].mana}`);
    }
}


solve(([
    "3",
    "Harry Potter-Lumos,Wingardium Leviosa-80",
    "Hermione Granger-Stupefy,Expecto Patronum-10",
    "Ron Weasley-Expelliarmus-60",
    "Cast Spell * Harry Potter * Wingardium Leviosa * 30",
    "Meditate * Hermione Granger * 20",
    "Meditate * Ron Weasley * 50",
    "Learn * Ron Weasley * Accio",
    "Cast Spell * Ron Weasley * Accio * 70",
    "Spell Concluded!"
]));