function charsInRange(char1, char2) {
    let n1 = char1.charCodeAt(0)
    let n2 = char2.charCodeAt(0)
    let result = [];
    if (n1 > n2) {
        for (let i = n2+1; i < n1; i++) {
            result.push(String.fromCharCode(i))
        }
    } else {
        for (let i = n1+1; i < n2; i++) {
            result.push(String.fromCharCode(i))
        }
    }
    console.log(result.join(' '));
}
charsInRange('a','d')