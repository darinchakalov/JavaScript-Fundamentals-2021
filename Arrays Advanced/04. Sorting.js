function solve(arr) {
    arr.sort(function (a, b) {
        return a-b;
    });
    let result =[]
    while (arr.length !== 0) {
        result.push(arr.pop())
        result.push(arr.shift())
    }
    console.log(result.join(' '));
}
solve([1,21,3,52,69,63,31,2,18,94])