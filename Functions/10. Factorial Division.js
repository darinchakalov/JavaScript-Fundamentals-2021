function factorialDivision(num1, num2) {
    let factSumNum1 = 1;
    let factSumNum2 = 1;
    let result = factSum(num1, factSumNum1) / factSum(num2, factSumNum2)

    console.log(`${result.toFixed(2)}`);

    function factSum(num, sum) {
        for (let i = 1; i <= num; i++) {
            sum *= i;
        }
        return sum;
    }
}
factorialDivision(6, 2);