function solve(arr) {
    arr = arr.map(Number)
    let sum = arr.shift() + arr.pop()
    console.log(sum);
}
solve(['20','30','40'])