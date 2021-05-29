function solve(num1, num2, operator) {
    switch (operator) {
        case 'multiply':
            multiply(num1, num2);
            break;
        case 'divide':
            divide(num1, num2);
            break;
        case 'add':
            add(num1, num2);
            break;
        case 'subtract':
            subtract(num1, num2);
            break;
    }

    function multiply(n1, n2) {
        console.log(n1 * n2);
    }
    function divide(n1, n2) {
        console.log(n1 / n2);
    }
    function add(n1, n2) {
        console.log(n1 + n2);
    }
    function subtract(n1, n2) {
        console.log(n1 - n2);
    }
}
solve(5, 5, 'multiply')