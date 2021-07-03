function solve(input) {
    let arr = input.shift().split(" ");
    let line = input.shift();
    while (line !== "end") {
        let current = line.split(" ");
        let [command, index1, index2] = [...current];
        switch (command) {
            case "swap":
                swap(Number(index1), Number(index2));
                break;
            case "multiply":
                multiply(Number(index1), Number(index2));
                break;
            case "decrease":
                decrease();
                break;
        }
        line = input.shift();
    }

    console.log(arr.join(', '));

    function swap(ind1, ind2) {
        let first = arr[ind1];
        let second = arr[ind2];
        arr.splice(ind1, 1, second);
        arr.splice(ind2, 1, first);
    }
    function multiply(ind1, ind2) {
        arr[ind1] = Number(arr[ind1] * Number(arr[ind2]))
    }
    function decrease() {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Number(arr[i])
            arr[i] -= 1;
        }
    }
}
solve([
    "23 -2 321 87 42 90 -123",
    "swap 1 3",
    "swap 3 6",
    "swap 1 0",
    "multiply 1 2",
    "multiply 2 1",
    "decrease",
    "end",
]);
