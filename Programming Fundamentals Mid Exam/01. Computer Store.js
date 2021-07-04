function solve(input) {
    let customerType = input.pop();
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (Number(input[i]) > 0) {
            sum += Number(input[i]);
        } else {
            console.log(`Invalid price!`);
        }
    }
    let tax = sum * 0.2;
    let total = sum * 1.2;

    if (customerType === "special") {
        total = total - total * 0.1;
    }

    if (total > 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${total.toFixed(2)}$`);
    } else {
        console.log(`Invalid order!`);
    }
}
//solve([1050, 200, 450, 2, 18.5, 16.86, "special"]);
//solve([1023, 15, -20, -5.5, 450, 20, 17.66, 19.3, "regular"]);
solve([`special`])