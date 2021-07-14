function solve(input) {
    let map = new Map();
    for (const line of input) {
        let [name, list] = line.split(": ");
        let hand = list.split(", ");
        if (!map.has(name)) {
            map.set(name, []);
            for (const card of hand) {
                if (!map.get(name).includes(card)) {
                    map.set(name, map.get(name).concat(card));
                }
            }
        } else {
            for (const card of hand) {
                if (!map.get(name).includes(card)) {
                    map.set(name, map.get(name).concat(card));
                }
            }
        }
    }

    for (const [name, deck] of map) {
        console.log(`${name}: ${calculate(deck)}`);
    }
    function calculate(deck) {
        let sum = 0;
        for (const card of deck) {
            let letter = card[card.length - 1];
            let number = card.substring(0, card.length - 1);
            if (number >= 2 && number <= 10) {
                sum += multiplier(Number(number), letter);
            } else if (number === "J") {
                sum += multiplier(11, letter);
            } else if (number === "Q") {
                sum += multiplier(12, letter);
            } else if (number === "K") {
                sum += multiplier(13, letter);
            } else if (number === "A") {
                sum += multiplier(14, letter);
            }
        }
        return sum;
    }
    function multiplier(num, letter) {
        switch (letter) {
            case "S":
                num *= 4;
                break;
            case "H":
                num *= 3;
                break;
            case "D":
                num *= 2;
                break;
            case "C":
                num *= 1;
                break;
        }

        return num;
    }
}
solve([
    "Peter: 2C, 4H, 9H, AS, QS",
    "Tomas: 3H, 10S, JC, KD, 5S, 10S",
    "Andrea: QH, QC, QS, QD",
    "Tomas: 6H, 7S, KC, KD, 5S, 10C",
    "Andrea: QH, QC, JS, JD, JC",
    "Peter: JD, JD, JD, JD, JD, JD",
]);
