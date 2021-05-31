function solve(arr) {
    let k = arr.shift();
    let firstK = arr.slice(0, k);
    let lastK = arr.slice(arr.length -k, arr.length)
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
solve([3,6, 7, 8, 9])