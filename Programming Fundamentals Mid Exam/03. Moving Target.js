function solve(input) {
    let arr = input.shift().split(" ").map(Number);
    let line = input.shift();
    while (line !== "End") {
        let [command, index, num] = line.split(" ");
        index = Number(index);
        num = Number(num);
        switch (command) {
            case "Shoot":
                if (index >= 0 && index <= arr.length - 1) {
                    arr[index] -= num;
                }
                if (arr[index] <= 0) {
                    arr.splice(index, 1);
                }
                break;
            case "Add":
                if (index >= 0 && index <= arr.length - 1) {
                    arr.splice(index, 0, num);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                if (index - num >= 0 && index + num <= arr.length - 1) {
                    let range = index + num - (index - num);
                    arr.splice(index - num, range + 1);
                } else {
                    console.log(`Strike missed!`);
                }
                break;
        }
        line = input.shift();
    }
    console.log(arr.join("|"));
}
solve(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
solve(["1 2 3 4 5", "Strike 0 1", "End"]);
