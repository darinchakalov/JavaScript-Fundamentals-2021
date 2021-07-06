function solve(input) {
    let list = input.shift().split(' ')
    let countingList = new Map();
    for (const word of list) {
        countingList.set(word, 0)
    }
    for (const word of input) {
        if (countingList.has(word)) {
            countingList.set(word, countingList.get(word)+1)
        }
    }
    let sortedList = Array.from(countingList).sort((a,b) => b[1] - a[1])
    for (const [key,value] of sortedList) {
        console.log(`${key} - ${value}`);
    }
}
solve([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurances",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
