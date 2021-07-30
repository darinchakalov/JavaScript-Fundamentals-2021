function solve(input) {
    let num = Number(input.shift());
    let line = input.shift();
    while (line !== "end") {
        let message = decrypt(line, num);
        if (message.match(/@[A-Za-z]+[^@!:>\-]+![GN]!/)) {
            let name = message.match(/@[A-Za-z]+/)
            name = name[0].substring(1, name[0].length)
            let goodOrBad = message.match(/![GN]!/)
            goodOrBad = goodOrBad[0][1]
            if (goodOrBad === 'G') {
                console.log(name);
            }
        }
        line = input.shift();
    }

    function decrypt(line, num) {
        let message = "";
        for (const char of line) {
            let newChar = char.charCodeAt(0);
            message += String.fromCharCode(newChar - num);
        }
        return message;
    }
}
solve(["3", "CNdwhamigyenumje$J$", "CEreelh-nmguuejnW$J$", "CVwdq&gnmjkvng$Q$", "end"]);
