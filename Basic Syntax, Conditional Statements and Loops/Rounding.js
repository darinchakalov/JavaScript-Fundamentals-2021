function solve(num, decimal) {
    if (decimal > 15) {
        decimal = 15
    }
    console.log(parseFloat(num.toFixed(decimal)));
}
solve(3.40564444444444444444444444444444444444444444, 15)