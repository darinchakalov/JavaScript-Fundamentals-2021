function solve(arr) {
    let notEnough = false;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            result.push(arr[i])
        } else {
            if (result.length > 1) {
                let operator = arr[i]
                let num2 = result.pop();
                let num1 = result.pop();
                switch (operator) {
                    case '+':
                        result.push(num1 + num2)
                        break;
                    case '-':
                        result.push(num1 - num2)
                        break;
                    case '*':
                        result.push(num1 * num2)
                        break;
                    case '/':
                        result.push(num1 / num2)
                        break;
                }
            } else {
                notEnough = true
                break;
            }
        }

    }
    if (notEnough) {
        console.log('Error: not enough operands!');
    } else if (result.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(result[0]);
    }
}
//solve([3, 4, '+'])
//solve([5, 3, 4, '*', '-'])
solve([31, 2, '+', 11, '/'])