function solve(arr) {
    let currentLongest = [];
    let longest = [];

    for (i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = arr[i + 1]
        if (current === next) {
            currentLongest.push(current);
        } else {
            currentLongest.push(current);
            if (currentLongest.length > longest.length) {
                longest = currentLongest;
            }
            currentLongest = [];
        }
    }
    if (currentLongest.length > longest.length) {
        console.log(currentLongest.join(' '));
    } else {
        console.log(longest.join(' '));
    }
}
//solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
//solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4,4,4,4])