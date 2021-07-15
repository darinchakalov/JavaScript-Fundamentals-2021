function solve(input) {
    let collectedData = {};
    for (const line of input) {
        let [garageNumber, carData] = line.split(" - ");
        if (!collectedData.hasOwnProperty(garageNumber)) {
            collectedData[garageNumber] = [];
            collectedData[garageNumber].push(carData);
        } else {
            collectedData[garageNumber].push(carData);
        }
    }
    for (const [key, value] of Object.entries(collectedData)) {
        console.log(`Garage № ${key}\n${printSubObject(value)}`);
    }
    function printSubObject(obj) {
        let result = "";
        for (let i = 0; i < obj.length; i++) {
            result += "--- ";
            let splitted = obj[i].split(", ");
            if (i !== obj.length - 1) {
                for (let j = 0; j < splitted.length; j++) {
                    let parts = splitted[j].split(": ");
                    if (j !== splitted.length - 1) {
                        result += `${parts.join(" - ")}, `;
                    } else {
                        result += `${parts.join(" - ")}`;
                    }
                }
                result += "\n";
            } else {
                for (let j = 0; j < splitted.length; j++) {
                    let parts = splitted[j].split(": ");
                    if (j !== splitted.length - 1) {
                        result += `${parts.join(" - ")}, `;
                    } else {
                        result += `${parts.join(" - ")}`;
                    }
                }
            }
        }
        return result;
    }
}
solve([
    "1 - color: blue, fuel type: diesel",
    "1 - color: red, manufacture: Audi",
    "2 - fuel type: petrol",
    "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
