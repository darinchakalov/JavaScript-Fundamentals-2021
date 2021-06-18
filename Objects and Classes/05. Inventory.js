function solve(arr) {
    class Heroes {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }
    let heroes = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split(" / ");
        if (items !== undefined) {
            items = items.split(", ").sort((a, b) => a.localeCompare(b));
            let hero = new Heroes(name, level, items.join(", "));
            heroes.push(hero);
        } else {
            let hero = new Heroes(name, level);
            heroes.push(hero);
        }
    }
    heroes.sort((a, b) => a.level - b.level);
    for (let i = 0; i < heroes.length; i++) {
        let currentHero = heroes[i];
        console.log(`Hero: ${currentHero.name}`);
        console.log(`level => ${currentHero.level}`);
        if (currentHero.items !== undefined) {
            console.log(`items => ${currentHero.items}`);
        }
    }
}
solve([
    "Isacc / 25 / Apple, aravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
//solve(["Isacc / 25", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"]);
