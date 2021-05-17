function solve(string) {
    let len = string.length;
    let printString = '';
    for (let i = len-1; i >=0 ; i--) {
        printString += string[i];
        
    }
    console.log(printString);
}
solve('Hello')