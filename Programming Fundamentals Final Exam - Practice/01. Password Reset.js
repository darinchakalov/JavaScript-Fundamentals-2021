function solve(input) {
    let str = input.shift();
    let line = input.shift();
    while (line !== "Done") {
        let [command, first, second] = line.split(" ");
        switch (command) {
            case "TakeOdd":
                let newStr = "";
                for (let i = 0; i < str.length; i++) {
                    if (i % 2 !== 0) {
                        newStr += str[i];
                    }
                }
                str = newStr;
                console.log(str);
                break;
            case "Cut":
                let index = Number(first)
                let length = Number(second)
                let remove = str.substring(index, index+length);
                str = str.replace(remove, "");
                console.log(str);
                break;
            case "Substitute":
                if (str.includes(first)) {
                    while (str.includes(first)) {
                        str = str.replace(first, second);
                    }
                    console.log(str);
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
        }
        line = input.shift();
    }
    console.log(`Your password is: ${str}`);
}
solve([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done",
]);
