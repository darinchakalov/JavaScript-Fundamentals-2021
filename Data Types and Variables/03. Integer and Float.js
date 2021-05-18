function solve(n1, n2, n3) {
    let result = n1 + n2 + n3;
    let output = result % 1 === 0 ? result += ' - Integer' : result += ' - Float';
    console.log(output);
}
solve(9, 100, 1.1)