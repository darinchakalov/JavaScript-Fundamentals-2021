function solve(input) {
    let num = Number(input.shift());
    let plants = {};
    for (let i = 0; i < num; i++) {
        let [plant, rarity] = input.shift().split("<->");
        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = {};
            plants[plant]["rarity"] = Number(rarity);
            plants[plant]["ratings"] = [];
        } else {
            plants[plant]["rarity"] = Number(rarity);
        }
    }
    let line = input.shift();
    while (line !== "Exhibition") {
        if (line.includes(': ')) {
            let [command, info] = line.split(": ");
            let [name, rate] = info.split(" - ");
            if (plants.hasOwnProperty(name)) {
                switch (command) {
                    case "Rate":
                        plants[name]["ratings"].push(Number(rate));
                        break;
                    case "Update":
                        plants[name]["rarity"] = Number(rate);
                        break;
                    case "Reset":
                        plants[name]["ratings"] = [];
                        break;
                    default:
                        console.log("error");
                        break;
                }
            } else {
                console.log("error");
            }
        } else {
            
        }
        line = input.shift();
    }
    console.log(`Plants for the exhibition:`);

    for (const [k, v] of Object.entries(plants).sort((a, b) => sortByRarityAndThenByRating(a, b))) {
        console.log(`- ${k}; Rarity: ${v["rarity"]}; Rating: ${findAvarage(v["ratings"]).toFixed(2)}`);
    }
    function findAvarage(arr) {
        let sum = 0;
        if (arr.length > 0) {
            for (const num of arr) {
                sum += Number(num);
            }
            return sum / arr.length;
        } else {
            return 0;
        }
    }

    function sortByRarityAndThenByRating(a, b) {
        if (b[1]["rarity"] > a[1]["rarity"]) {
            return 1;
        } else if (b[1]["rarity"] < a[1]["rarity"]) {
            return -1;
        } else {
            if (findAvarage(a[1]["ratings"]) > findAvarage(b[1]["ratings"])) {
                return -1;
            } else if (findAvarage(a[1]["ratings"]) < findAvarage(b[1]["ratings"])) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}
solve([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition",
]);
//solve(["2", "Candelabra<->10", "Oahu<->10", "gogogp", "Rate: Oahu - 7", "Rate: Candelabra - 6", "Exhibition"]);
