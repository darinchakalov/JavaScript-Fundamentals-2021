function solve(input) {
    input = input.replace(/\s+/g, " ");
    let arr = input.split(" ");
    let result = 0;
    for (let str of arr) {
        if (str.length >= 3) {
            result += calculate(str);
        }
    }
    console.log(result.toFixed(2));

    function calculate(str) {
        let firstLetter = str[0];
        let secondLetter = str[str.length - 1];
        let num = Number(str.substring(1, str.length - 1));
        let n1 = firstLetter.charCodeAt(0);
        let n2 = secondLetter.charCodeAt(0);
        if (firstLetter.charCodeAt(0) >= 65 && firstLetter.charCodeAt(0) <= 90) {
            num /= firstLetter.charCodeAt(0) - 64;
        } else {
            num *= firstLetter.charCodeAt(0) - 96;
        }
        if (secondLetter.charCodeAt(0) >= 65 && secondLetter.charCodeAt(0) <= 90) {
            num -= secondLetter.charCodeAt(0) - 64;
        } else {
            num += secondLetter.charCodeAt(0) - 96;
        }

        return num;
    }
}
solve('a1');
