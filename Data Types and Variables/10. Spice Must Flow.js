function solve(num) {
    let days = 0;
    let total = 0;
    while (num >= 100) {
        total += num - 26;
        days++;
        num -= 10;
    }
    if (total >= 26) {
        total -= 26;
    }
    console.log(days);
    console.log(total);
}
solve(101)