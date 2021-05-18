function solve(num) {
    let n = num.toString();
    let sum = 0
    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    let res = sum.toString().includes(9)
    console.log(res
        ? `${num} Amazing? True`
        : `${num} Amazing? False`);
}
solve(999);