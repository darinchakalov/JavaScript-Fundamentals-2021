function solve(sentance, word) {
    while (sentance.includes(word)) {
        sentance = sentance.replace(word, '*'.repeat(word.length))
    }
    console.log(sentance);
}
solve("A small sentence with some words", "small")