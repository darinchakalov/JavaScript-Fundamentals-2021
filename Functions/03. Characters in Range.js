function charsInRange(char1, char2) {
    function charPos(ch) {
        let index = ch[0]
        let res = ch.charCodeAt(index)
        return res;
    }
    let printResult = ''
    if (charPos(char1) > charPos(char2)) {
        for (let i = charPos(char2)+1; i < charPos(char1); i++) {
            printResult += ' ' + String.fromCharCode(i);
        }
    }
    else {
        for (let i = charPos(char1)+1; i < charPos(char2); i++) {
            printResult += ' ' + String.fromCharCode(i);
        }
    }
    console.log(printResult);
}
charsInRange('C', '#')