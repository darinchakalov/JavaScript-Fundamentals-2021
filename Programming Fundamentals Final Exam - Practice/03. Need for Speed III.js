function solve(input) {
    let numberOfCars = Number(input.shift());
    let cars = {};
    for (let i = 0; i < numberOfCars; i++) {
        let [car, mileage, fuel] = input.shift().split("|");
        if (!cars.hasOwnProperty(car)) {
            cars[car] = {};
            cars[car]["mileage"] = Number(mileage);
            cars[car]["fuel"] = Number(fuel);
        }
    }
    let line = input.shift();
    while (line !== "Stop") {
        let [command, car, first, second] = line.split(" : ");
        switch (command) {
            case "Drive":
                if (cars[car]["fuel"] < Number(second)) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    cars[car]["mileage"] += Number(first);
                    cars[car]["fuel"] -= Number(second);
                    console.log(`${car} driven for ${first} kilometers. ${second} liters of fuel consumed.`);
                }
                if (cars[car]["mileage"] >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
                break;
            case "Refuel":
                let needed = Math.min(Number(first), 75 - cars[car]["fuel"]);
                cars[car]["fuel"] += needed;
                console.log(`${car} refueled with ${needed} liters`);
                break;
            case "Revert":
                cars[car]["mileage"] -= Number(first);
                if (cars[car]["mileage"] < 10000) {
                    cars[car]["mileage"] = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${first} kilometers`);
                }
                break;
        }
        line = input.shift();
    }

    for (const [car, data] of Object.entries(cars).sort((a,b) => sortByMileageAndName(a,b))) {
        console.log(`${car} -> Mileage: ${data['mileage']} kms, Fuel in the tank: ${data['fuel']} lt.`);
    }

    function sortByMileageAndName(a, b) {
        if (a[1]['mileage'] > b[1]['mileage']) {
            return -1
        } else if (a[1]['mileage'] < b[1]['mileage']) {
            return 1
        } else {
            if (a[0] > b[0]) {
                return 1
            } else if (a[0] < b[0]){
                return -1
            } else {
                return 0
            }
        }
    }
}
solve([
    "3",
    "Audi A6|38000|62",
    "Mercedes CLS|11000|35",
    "Volkswagen Passat CC|45678|5",
    "Drive : Audi A6 : 543 : 47",
    "Drive : Mercedes CLS : 94 : 11",
    "Drive : Volkswagen Passat CC : 69 : 8",
    "Refuel : Audi A6 : 50",
    "Revert : Mercedes CLS : 500",
    "Revert : Audi A6 : 30000",
    "Stop",
]);
