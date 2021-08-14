function solve(input) {
    let str = input.shift();
    let line = input.shift();
    while (line !== "Done") {
        let [command, first, second] = line.split(" ");
        switch (command) {
            case "Change":
                while (str.includes(first)) {
                    str = str.replace(first, second);
                }
                console.log(str);
                break;
            case "Includes":
                if (str.includes(first)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "End":
                if (str.endsWith(first)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Uppercase":
                str = str.toUpperCase();
                console.log(str);
                break;
            case "FindIndex":
                let index = str.indexOf(first);
                console.log(index);
                break;
            case "Cut":
                str = str.substring(Number(first), Number(first) + Number(second));
                console.log(str);
                break;
        }
        line = input.shift();
    }
}
/*solve([
    "//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done",
]);*/

solve([
    "*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done",
]);
