function solve(input) {
    let arr = input.shift().split(" ").map(Number);
    let target = input.shift();
    let shotTargets = 0
    while (target !== "End") {
        if (target >= 0 && target <= arr.length - 1) {
            let num = arr[target];
            if (num > -1) {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > -1 && i !== target) {
                        if (arr[i] > num) {
                            arr[i] -= num;
                        } else if (arr[i] <= num) {
                            arr[i] += num;
                        }
                    }
                }
            }
            arr[target] = -1;
            shotTargets++
        }
        target = input.shift();
    }
    console.log(`Shot targets: ${shotTargets} -> ${arr.join(' ')}`);
}
//solve(["24 50 36 70", 0, 4, 3, 1, "End"]);
solve(["30 30 12 60 54 66", 5, 2, 4, 0, "End"]);
