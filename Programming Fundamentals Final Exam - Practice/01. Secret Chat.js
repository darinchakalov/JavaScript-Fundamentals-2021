function solve(input) {
    let message = input.shift();
    let line = input.shift();
    while (line !== "Reveal") {
        let [command, first, second] = line.split(":|:");
        switch (command) {
            case "InsertSpace":
                let value = " ";
                message = insert(message, Number(first), value);
                console.log(message);
                break;
            case "Reverse":
                if (message.includes(first)) {
                    message = remove(message, first)
                    console.log(message);
                } else {
                    console.log("error");
                }
                break;
            case "ChangeAll":
                while (message.includes(first)) {
                    message = message.replace(first, second)
                }
                console.log(message);
                break;
            }
        line = input.shift();
    }

    console.log(`You have a new text message: ${message}`);

    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
    function remove(str, substr){
        str = str.replace(substr, '')
        let reversedSubstr = ''
        for (let i = substr.length -1 ; i >= 0; i--) {
            reversedSubstr += substr[i]
        }
        str += reversedSubstr;
        return str;
    }
}
solve(["heVVodar!gniV", "ChangeAll:|:V:|:l", "Reverse:|:!gnil", "InsertSpace:|:5", "Reveal"]);
