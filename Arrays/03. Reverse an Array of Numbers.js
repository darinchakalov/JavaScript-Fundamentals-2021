function solve(n, arr) {
    let newArr = [];
    for (i = 0; i < n; i++){
        newArr.push(arr[i])
    }
    console.log(newArr.reverse().join(' '));
}
solve(3,[10,20,30,40,50])