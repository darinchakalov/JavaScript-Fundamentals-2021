function solve(input) {
    let travelData = {};
    for (const line of input) {
        let [country, town, travelCost] = line.split(" > ");
        if (!travelData.hasOwnProperty(country)) {
            travelData[country] = {};
            if (!travelData[country].hasOwnProperty(town)) {
                travelData[country][town] = travelCost;
            }
        } else {
            if (!travelData[country].hasOwnProperty(town)) {
                travelData[country][town] = travelCost;
            } else {
                if (travelData[country][town] > travelCost) {
                    travelData[country][town] = travelCost;
                }
            }
        }
    }


    for (const [key, value] of Object.entries(travelData).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`${key} -> ${printObject(value)}`);
    }
    function printObject(obj) {
        let towns = [];
        for (let [key, value] of Object.entries(obj).sort((a, b) => a[1] - b[1])) {
            towns.push(`${key} -> ${value}`);
        }
        return towns.join(" ");
    }
}
/*solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
]);*/
solve([
    "Bulgaria > Sofia > 25000",
    "Bulgaria > Sofia > 25000",
    "Kalimdor > Orgrimar > 25000",
    "Albania > Tirana > 25000",
    "Bulgaria > Aarna > 25010",
    "Bulgaria > Lukovit > 10",
]);
