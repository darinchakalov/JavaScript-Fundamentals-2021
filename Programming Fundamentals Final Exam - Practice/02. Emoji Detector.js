function solve(input) {
    let emojis = [];
    let nums = [];
    //let pattern = /([:|*]{2})[A-Z][a-z][a-z]+\1/g;
    let pattern = /([:]{2}|[*]{2})([A-Z][a-z]{2,})\1/g
    let numsPat = /\d/g;
    while ((matchedEmojis = pattern.exec(input)) !== null) {
        emojis.push(matchedEmojis[0]);
    }
    while ((matchedNums = numsPat.exec(input)) !== null) {
        nums.push(Number(matchedNums[0]));
    }
    let threshold = 0;
    if (nums.length > 0) {
        threshold = 1;
        for (const num of nums) {
            threshold *= num;
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    if (emojis.length > 0) {
        console.log(`${emojis.length} emojis found in the text. The cool ones are: `);
        let result = {};
        for (const emo of emojis) {
            let cutEmo = emo.substring(2, emo.length - 2);
            result[emo] = findCoolnes(cutEmo);
        }
        function findCoolnes(emoji) {
            let coolness = 0;
            for (const letter of emoji) {
                coolness += letter.charCodeAt(0);
            }
            return coolness;
        }
        for (const [k, v] of Object.entries(result)) {
            if (v >= threshold) {
                console.log(k);
            }
        }
    }
}
solve([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
solve(["Test"]);
