function solve(num) {
    let sum = 0
    let current = 1;
    let print = 1;
    while (current <= num) {
        console.log(print);
        sum += print;
        print += 2;
        current++
    }

    console.log(`Sum: ${sum}`);
}
solve(3)