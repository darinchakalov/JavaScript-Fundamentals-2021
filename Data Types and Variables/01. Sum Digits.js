function solve(num) {
    let n = num.toString()
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i])
    }
    console.log(sum);
}
solve(245678)