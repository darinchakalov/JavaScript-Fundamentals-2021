function solve(input) {
    let items = input.shift().split(", ");
    let command = input.shift();
    while (command !== "Craft!") {
        let current = command.split(" - ");
        let [whatDo, item] = [...current];
        let index = items.indexOf(item)
        switch (whatDo) {
            case "Collect":
                if (!items.includes(item)) {
                    items.push(item)
                }
                break;
            case "Drop":
                if (items.includes(item)) {
                    items.splice(index, 1)
                }
                break;
            case "Combine Items":
                twoItems = item.split(':')
                let [oldItem, newItem] = [...twoItems]
                index = items.indexOf(oldItem)
                if (items.includes(oldItem)) {
                    items.splice(index+1, 0, newItem)
                }
                break;
            case "Renew":
                if (items.includes(item)) {
                    items.splice(index, 1)
                    items.push(item)
                }
                break;
        }
        command = input.shift();
    }
    console.log(items.join(', '));
}
solve(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
