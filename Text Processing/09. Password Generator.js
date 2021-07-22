function solve(input) {
    let concatStr = input[0].concat(input[1]);
    let word = input[2];
    let wordInd = 0;
    for (let i = 0; i < concatStr.length; i++) {
        if (
            concatStr[i] === "a" ||
            concatStr[i] === "e" ||
            concatStr[i] === "i" ||
            concatStr[i] === "o" ||
            concatStr[i] === "u"
        ) {
            concatStr = concatStr.replace(concatStr[i], word[wordInd].toUpperCase());
            wordInd++;
            if (wordInd > word.length - 1) {
                wordInd = 0;
            }
        }
    }
    reverseString(concatStr);
    function reverseString(str) {
        console.log(`Your generated password is ${str.split("").reverse().join("")}`);
    }
}
solve(["ilovepizza", "ihatevegetables", "orange"]);
