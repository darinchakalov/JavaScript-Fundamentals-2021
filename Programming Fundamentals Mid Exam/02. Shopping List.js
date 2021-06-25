function solve(input) {
    let list = input.shift().split("!");
    let command = input.shift();

    while (command !== "Go Shopping!") {
        let currentCommand = command.split(" ");
        let [whatDo, product] = [currentCommand[0], currentCommand[1]];
        let index = list.indexOf(product);
        switch (whatDo) {
            case "Unnecessary":
                if (list.includes(product)) {
                    list.splice(index, 1);
                }
                break;
            case "Urgent":
                if (!list.includes(product)) {
                    list.unshift(product);
                }
                break;
            case "Correct":
                if (list.includes(product)) {
                    let newName = currentCommand[2];
                    list[index] = newName;
                }
                break;
            case "Rearrange":
                if (list.includes(product)) {
                    list.splice(index, 1);
                    list.push(product);
                }
                break;
            default:
                break;
        }
        command = input.shift()
    }
    console.log(list.join(", "));
}
//solve(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
solve([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Golf",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!",
]);
