function factSum(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum = sum * i;
    }
    console.log(sum);
}
factSum(5)