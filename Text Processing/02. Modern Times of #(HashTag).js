function solve(string) {
    let arr = string.split(" ");
    let result = [];
    for (const w of arr) {
        if (w.length > 1) {
            if (w.startsWith("#")) {
                let word = w.substring(1, w.length);
                let onlyLetters = true;
                for (const letter of word) {
                    if (letter.toUpperCase().charCodeAt(0) < 65 || letter.toUpperCase().charCodeAt(0) > 90) {
                        onlyLetters = false;
                    }
                }
                if (onlyLetters) {
                    result.push(word);
                }
            }
        }
    }
    for (const word of result) {
        console.log(word);
    }
}
solve("Nowadays everyone uses # to tag a #speci$al word in #socialMedia");
