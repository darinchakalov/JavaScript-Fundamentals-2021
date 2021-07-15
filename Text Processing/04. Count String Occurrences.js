function solve(string, word) {
    let text = string.split(' ')
    let count = 0;
    for (const w of text) {
        if (w === word) {
            count++;
        }
    }
    console.log(count);
}
solve("This is a word and it also is a sentence", "is");
