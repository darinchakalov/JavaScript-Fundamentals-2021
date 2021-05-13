function solve(start, end) {
    let sum = start; 
    let printLine = '' + start
    for (let i = start+1; i <= end; i++) {
        sum+=i;
        printLine+= ' ' + i;
    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}
solve(5,10)