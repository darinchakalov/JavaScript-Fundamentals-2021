function solve(input) {
    let arr = input.split(" ");
    let junkMaterials = {};
    let reachedQuantity;
    let mainResources = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };
    for (let i = 0; i < arr.length; i += 2) {
        let quantity = Number(arr[i]);
        let material = arr[i + 1];
        material = material.toLowerCase();
        if (material === "motes" || material === "fragments" || material === "shards") {
            if (!mainResources.hasOwnProperty(material)) {
                mainResources[material] = quantity;
            } else {
                mainResources[material] += quantity;
            }
            if (mainResources[material] >= 250) {
                reachedQuantity = material;
                break;
            }
        } else {
            if (!junkMaterials.hasOwnProperty(material)) {
                junkMaterials[material] = quantity;
            } else {
                junkMaterials[material] += quantity;
            }
        }
    }
    switch (reachedQuantity) {
        case "shards":
            console.log("Shadowmourne obtained!");
            break;
        case "fragments":
            console.log("Valanyr obtained!");
            break;
        case "motes":
            console.log("Dragonwrath obtained!");
            break;
    }
    mainResources[reachedQuantity] -= 250;
    
    for (const [resource, quantity] of Object.entries(mainResources).sort((a, b) =>
        sortingByQuantityAndThenByName(a, b)
    )) {
        console.log(`${resource}: ${quantity}`);
    }
    for (const [resource, quantity] of Object.entries(junkMaterials).sort((a,b) => a[0].localeCompare(b[0]))) {
        console.log(`${resource}: ${quantity}`);
    }

    function sortingByQuantityAndThenByName(a, b) {
        if (b[1] > a[1]) {
            return 1;
        } else if (b[1] < a[1]) {
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
//solve("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')