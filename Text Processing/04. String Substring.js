function solve(word, text) {
    let textArr = text.split(' ');
    let found = false
    for (const w of textArr) {
        if (word === w.toLowerCase()) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
solve("javascript", "JavaScript is the best programming language");
