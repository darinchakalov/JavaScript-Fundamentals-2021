function solve(input) {
    let [first, second, third] = input[0].split("|");
    let capLetters = first.match(/([#$%*&]{1})[A-Z]+\1/);
    capLetters = capLetters[0].split("");
    capLetters.pop();
    capLetters.shift();
    //capLetters = capLetters[0].substring(1, capLetters[0].length - 1);
    let asciiLet = second.match(/[0-9]{2}:[0-9]{2}/g);
    let words = third.split(" ");
    let result = [];
    let combinations = {};
    for (const line of asciiLet) {
        let [code, len] = line.split(":");
        let letter = String.fromCharCode(Number(code));
        if (capLetters.includes(letter)) {
            combinations[letter] = Number(len)+1
        }
    }
    for (const letter of capLetters) {
        for (const word of words) {
            if (word[0] === letter && word.length === combinations[letter]) {
                result.push(word)
            }
        }
    }
    for (const word of result) {
        console.log(word);
    }

   
}
/*solve([
    "sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos",
]);*/
solve([
    'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig',
]);
