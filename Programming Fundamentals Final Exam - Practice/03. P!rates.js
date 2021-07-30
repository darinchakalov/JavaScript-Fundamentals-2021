function solve(input) {
    let line = input.shift();
    let towns = {};
    while (line !== "Sail") {
        let [city, population, gold] = line.split("||");
        if (!towns.hasOwnProperty(city)) {
            towns[city] = {};
            towns[city]["population"] = Number(population);
            towns[city]["gold"] = Number(gold);
        } else {
            towns[city]["population"] += Number(population);
            towns[city]["gold"] += Number(gold);
        }
        line = input.shift();
    }
    while (line !== "End") {
        if (line.includes("Plunder")) {
            let [command, name, people, gold] = line.split("=>");
            if (towns.hasOwnProperty(name)) {
                towns[name]["population"] -= Number(people);
                towns[name]["gold"] -= Number(gold);
                console.log(`${name} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                if (towns[name]["population"] <= 0 || towns[name]["gold"] <= 0) {
                    console.log(`${name} has been wiped off the map!`);
                    delete towns[name];
                }
            }
        } else if (line.includes("Prosper")) {
            let [command, name, gold] = line.split("=>");
            if (Number(gold) > 0) {
                towns[name]["gold"] += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${name} now has ${towns[name]["gold"]} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }
        line = input.shift();
    }
    if (Object.keys(towns).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(towns).length} wealthy settlements to go to:`);
        for (const [k, v] of Object.entries(towns).sort((a,b) => sortingByQuantityAndThenByName(a,b))) {
            console.log(`${k} -> Population: ${v['population']} citizens, Gold: ${v['gold']} kg`);
        }
    }


    function sortingByQuantityAndThenByName(a, b) {
        if (b[1]['gold'] > a[1]['gold']) {
            return 1;
        } else if (b[1]['gold'] < a[1]['gold']) {
            return -1;
        } else {
            if (a[0] > b[0]) {
                return 1;
            } else if (a[0] < b[0]) {
                return -1;
            } else {
                return 0;
            }
        }
    }
}
solve([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End",
]);
