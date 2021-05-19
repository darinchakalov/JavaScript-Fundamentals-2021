function solve(arr) {
    let modified = [];
    let arrSum = 0;
    let modSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            modified[i] = arr[i] + i;
        } else {
            modified[i] = arr[i] - i;
        }
        arrSum += arr[i];
        modSum += modified[i];
    }
    console.log(modified);
    console.log(arrSum);
    console.log(modSum);
}
solve([5, 15, 23, 56, 35])