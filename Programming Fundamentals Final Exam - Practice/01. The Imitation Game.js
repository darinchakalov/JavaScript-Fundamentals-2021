function solve(input) {
    let message = input.shift();
    let line = input.shift();
    while (line !== "Decode") {
        let [command, first, second] = line.split("|");
        if (first.length > 0) {
            switch (command) {
                case "Move":
                    let move = message.substring(0, Number(first));
                    message = message.replace(move, "");
                    message += move;
                    break;
                case "Insert":
                    message = insert(message, Number(first), second);
                    break;
                case "ChangeAll":
                    while (message.includes(first)) {
                        message = message.replace(first, second);
                    }
                    //let rgx = new RegExp(first, 'g')
                    //message = message.replace(rgx, 'l')
                    break;
            }
        }
        line = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);

    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
}
//solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
