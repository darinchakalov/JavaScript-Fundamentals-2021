function solve(input) {
    let energy = input.shift();
    let command = input.shift();
    let battlesWon = 0;
    let fallen = false;
    while (command !== "End of battle") {
        command = Number(command)
        if (energy >= command) {
            energy -= command;
            battlesWon++;
            if (battlesWon % 3 === 0) {
                energy += battlesWon;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            fallen = true;
            break;
        }
        command = input.shift();
    }
    if (!fallen) {
        console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
    }
}
//solve([100, 10, 10, 10, 1, 2, 3, 73, 10]);
solve([200, 54, 14, 28, 13, "End of battle"]);
