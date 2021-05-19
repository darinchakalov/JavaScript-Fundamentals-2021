function solve(num) {
    let prime = true;
    for (let d = 2; d <= Math.sqrt(num); d++) {
        if (Number(num) % d == 0) {
            prime = false;
            break;
        }
    }
    console.log(prime);
}
solve(7);