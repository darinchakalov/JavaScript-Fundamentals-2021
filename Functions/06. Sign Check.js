function solve(n1, n2, n3) {
    let negativeNumbers = 0;
    if (n1 < 0) {
        negativeNumbers++;
    }
    if (n2 < 0) {
        negativeNumbers++;
    }
    if (n3 < 0) {
        negativeNumbers++;
    }
    switch (negativeNumbers) {
        case 0:
            console.log('Positive');
            break;
        case 1:
            console.log('Negative');
            break;
        case 2:
            console.log('Positive');
            break;
        case 3:
            console.log('Negative');
            break;
    }
}
solve(-5, -12, 15)