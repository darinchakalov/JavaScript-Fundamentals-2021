function solve(input) {
    let activationKey = input.shift();
    let line = input.shift();
    while (line !== "Generate") {
        if (line.includes("Contains")) {
            let [command, substring] = line.split(">>>");
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (line.includes("Flip")) {
            let [command, whatDo, ind1, ind2] = line.split(">>>");
            let replaceable = activationKey.slice(Number(ind1), Number(ind2))
            let changed = '';
            if (whatDo === 'Upper') {
                for (let letter of replaceable) {
                    
                    changed += letter.toUpperCase()
                }
            } else if(whatDo === 'Lower'){
                for (let letter of replaceable) {
                    changed += letter.toLowerCase()
                }
            }
            activationKey = activationKey.replace(replaceable, changed)
            console.log(activationKey);
        } else if (line.includes("Slice")) {
            let [command, ind1, ind2] = line.split(">>>");
            let removable = activationKey.slice(Number(ind1), Number(ind2))
            activationKey = activationKey.replace(removable,'')
            console.log(activationKey);
        }
        line = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
solve([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate",
]);
