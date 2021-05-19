function solve(arr) {
    //console.log(arr.reverse().join(' '));
    for (let i = 0; i < arr.length / 2; i++) {
        let oldElement = arr[i];
        let previoisIndex = arr.length - 1 - i;
        arr[i] = arr[previoisIndex];
        arr[previoisIndex] = oldElement;
    }
    console.log(arr.join(' '));
}
solve(['a', 'b', 'c', 'd', 'e'])