function solve(num) {
    switch (true) {
        case (num % 10 == 0):
            console.log('The number is divisible by 10');
            break;
        case (num % 7 == 0):
            console.log('The number is divisible by 7');
            break;
        case (num % 6 == 0):
            console.log('The number is divisible by 6');
            break;
        case (num % 3 == 0):
            console.log('The number is divisible by 3');
            break;
        case (num % 2 == 0):
            console.log('The number is divisible by 2');
            break;
        default:
            console.log('Not divisible');
            break;
    }
}
solve(30)