function solve(input) {
    let result = "";
    let current = input[0];
    result += current;
    for (let i = 0; i < input.length; i++) {
        let newLetter = input[i];
        if (newLetter !== current) {
            current = newLetter;
            result += current;
        }
    }
    console.log(result);
}
solve("aaaaabbbbbcdddeeeedssaa");
