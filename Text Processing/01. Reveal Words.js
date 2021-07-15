function solve(words, text) {
    let wordsArr = words.split(", ");
    let textArr = text.split(" ");
    for (const w of textArr) {
        for (const wo of wordsArr) {
            if (w == '*'.repeat(wo.length)) {
                text = text.replace(w, wo)
            }
        }
    }
    console.log(text);
}
solve("great", "softuni is ***** place for learning new programming languages");
