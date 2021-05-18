function solve(str,char,word) {
    let res = str.replace('_', char)
    let output = res === word ? "Matched" : "Not Matched";
    console.log(output);
}
solve('Str_ng','I','Strong')