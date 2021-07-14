function solve(input) {
    let collectedData = {};
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (!collectedData.hasOwnProperty(resource)) {
            collectedData[resource] = quantity;
        } else {
            collectedData[resource] += quantity;
        }
    }
    for (const [resource, quantity] of Object.entries(collectedData)) {
        console.log(`${resource} -> ${quantity}`);
    }
}
solve(["Gold", "155", "Silver", "10", "Copper", "17"]);
