function solve(input) {
    let arr = input.shift().split(" ").map(Number);
    let line = input.shift();
    while (line !== "Finish") {
        let [command, num1, num2] = line.split(" ");
        num1 = Number(num1);
        num2 = Number(num2);
        switch (command) {
            case "Add":
                arr.push(num1);
                break;
            case "Remove":
                if (arr.includes(num1)) {
                    let index = arr.indexOf(num1)
                    arr.splice(index, 1);
                }
                break;
            case "Replace":
                if (arr.includes(num1)) {
                    let index = arr.indexOf(num1)
                    arr.splice(index, 1, num2);
                }
                break;
            case "Collapse":
                arr = arr.filter((el) => el >= num1);
                break;
        }
        line = input.shift();
    }
    console.log(arr.join(' '));
}
//solve(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
solve(['1 20 -1 10',
    'Collapse 8',
    'Finish'])