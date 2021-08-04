function solve(input) {
    let heroCount = Number(input.shift());
    let heroes = {};
    for (let i = 0; i < heroCount; i++) {
        let [name, hp, mp] = input.shift().split(" ");
        heroes[name] = {};
        heroes[name]["hp"] = Number(hp);
        heroes[name]["mp"] = Number(mp);
    }
    let line = input.shift();
    while (line !== "End") {
        let [command, first, second, third] = line.split(" - ");
        if (heroes.hasOwnProperty(first)) {
            switch (command) {
                case "CastSpell":
                    if (heroes[first]["mp"] >= Number(second)) {
                        heroes[first]["mp"] -= Number(second);
                        console.log(
                            `${first} has successfully cast ${third} and now has ${heroes[first]["mp"]} MP!`
                        );
                    } else {
                        console.log(`${first} does not have enough MP to cast ${third}!`);
                    }
                    break;
                case "TakeDamage":
                    heroes[first]["hp"] -= Number(second);
                    if (heroes[first]["hp"] > 0) {
                        console.log(
                            `${first} was hit for ${second} HP by ${third} and now has ${heroes[first]["hp"]} HP left!`
                        );
                    } else {
                        console.log(`${first} has been killed by ${third}!`);
                        delete heroes[first];
                    }
                    break;
                case "Recharge":
                    let mpAmount = Math.min(Number(second), 200 - heroes[first]["mp"]);
                    heroes[first]["mp"] += Number(second);
                    if (heroes[first]["mp"] > 200) {
                        heroes[first]["mp"] = 200;
                    }
                    console.log(`${first} recharged for ${mpAmount} MP!`);
                    break;
                case "Heal":
                    let hpAmount = Math.min(Number(second), (100 - heroes[first]["hp"]));
                    heroes[first]["hp"] += Number(second);
                    if (heroes[first]["hp"] > 100) {
                        heroes[first]["hp"] = 100;
                    }
                    console.log(`${first} healed for ${hpAmount} HP!`);
                    break;
            }
        }
        line = input.shift();
    }
    for (const [k, v] of Object.entries(heroes).sort((a, b) => sortByHPandName(a, b))) {
        console.log(k);
        console.log(`  HP: ${v["hp"]}`);
        console.log(`  MP: ${v["mp"]}`);
    }

    function sortByHPandName(a, b) {
        if (a[1]["hp"] < b[1]["hp"]) {
            return 1;
        } else if (a[1]["hp"] > b[1]["hp"]) {
            return -1;
        } else {
            if (a[0] < b[0]) {
                return 1;
            } else if (a[0] > b[0]) {
                return -1;
            } else {
                return 0;
            }
        }
    }
}
/*solve([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End",
]);*/
solve(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])
