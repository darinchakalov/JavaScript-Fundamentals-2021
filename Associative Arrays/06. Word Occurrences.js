function solve(input) {
    let words = new Map();
    for (const word of input) {
        if (!words.has(word)) {
            words.set(word, 1);
        } else {
            words.set(word, words.get(word) + 1);
        }
    }
    let sorted = Array.from(words).sort((a,b) => b[1] - a[1])
    for (const [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}
solve([
    "Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence",
]);
