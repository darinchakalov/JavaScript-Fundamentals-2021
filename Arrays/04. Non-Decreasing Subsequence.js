function solve(arr) {
    let result = [];
    let [current, next] = [0,0];
    result.push(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        [current, next] = [arr[i],  arr[i+1]];
        arr.filter(next >= current)
        if (next >= current) {
            result.push(next)
        }
    }
    console.log(result.join(' '));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1,2,3,4])