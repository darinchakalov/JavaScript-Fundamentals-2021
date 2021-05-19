function solve(arr) {
    var condensed = [];
    if (arr.length > 1) {
        while (arr.length > 1) {
            for (let i = 0; i < arr.length; i++) {
                condensed[i] = arr[i] + arr[i + 1];
                arr[i] = condensed[i];
                condensed.pop();
            }
            arr.pop()
        }
        console.log(condensed[0]);
    }
    else {
        console.log(arr[0]);
    }
}
solve([2, 10, 3])
//solve([1])