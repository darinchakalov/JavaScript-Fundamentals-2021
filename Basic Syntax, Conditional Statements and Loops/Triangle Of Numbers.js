function solve(num) {
    let current = 1;
    let printLine = '';
    let isBigger = false;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {

            if (current > num) {
                isBigger = true;
                break;
            }
            printLine += current + ' '
            
        }
        console.log(printLine);
        printLine = ''
        if (isBigger) {
            break;
        }
        current++
    }
}
solve(5)