function solve(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result.push(arr[i])
        } else {
            result.unshift(arr[i])
        }
    }

    printResutl(result);

    function printResutl(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
}
solve([7, -2, 8, 9])