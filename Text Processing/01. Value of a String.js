function solve(input) {
    let letterArr = input[0].split("");
    let casing = input[1];
    let sum = 0;
    for (const letter of letterArr) {
        if (casing === 'LOWERCASE') {
            if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
                sum += Number(letter.charCodeAt(0))
            }
        } else {
            if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
                sum += Number(letter.charCodeAt(0))
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
solve(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
solve(["AC/DC", "UPPERCASE"]);
