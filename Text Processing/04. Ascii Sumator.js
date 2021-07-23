function solve(input) {
    let ch1 = input[0];
    let ch2 = input[1];
    let str = input[2];
    let sum = 0;
    for (const letter of str) {
        if (ch1.charCodeAt(0) < ch2.charCodeAt(0)) {
            if (letter.charCodeAt(0) > ch1.charCodeAt(0) && letter.charCodeAt(0) < ch2.charCodeAt(0)) {
                sum += letter.charCodeAt(0);
            }
        } else {
            if (letter.charCodeAt(0) > ch2.charCodeAt(0) && letter.charCodeAt(0) < ch1.charCodeAt(0)) {
                sum += letter.charCodeAt(0);
            }
        }
    }
    console.log(sum);
}
//solve([".", "@", "dsg12gr5653feee5"]);
solve(['a','1','jfe392$#@j24ui9ne#@$'])