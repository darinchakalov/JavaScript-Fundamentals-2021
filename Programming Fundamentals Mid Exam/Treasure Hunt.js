function solve(input) {
    let chestItems = input.shift().split("|");
    let line = input.shift();
    while (line !== "Yohoho!") {
        let currentArr = line.split(" ");
        let command = currentArr.shift();
        switch (command) {
            case "Loot":
                for (const item of currentArr) {
                    if (!chestItems.includes(item)) {
                        chestItems.unshift(item);
                    }
                }
                break;
            case "Drop":
                let index = Number(currentArr[0]);
                if (index > 0 && index < chestItems.length -1) {
                    let dropped = chestItems.splice(index, 1);
                    chestItems.push(dropped[0]);
                }
                break;
            case "Steal":
                let amount = Number(currentArr[0]);
                if (amount > chestItems.length) {
                    chestItems = [];
                } else {
                    let stollen = []
                    for (let i = chestItems.length - amount; i < chestItems.length; i++) {
                        stollen.push(chestItems[i])
                    }
                    chestItems.splice(chestItems.length - amount, amount)
                    console.log(stollen.join(', '));
                }
                break;
        }
        line = input.shift();
    }
    if (chestItems.length <= 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let sum = 0
        for (const item of chestItems) {
            sum += item.length
        }
        let avarage = sum / chestItems.length;
        console.log(`Average treasure gain: ${avarage.toFixed(2)} pirate credits.`);
    }
}
solve([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!",
]);
