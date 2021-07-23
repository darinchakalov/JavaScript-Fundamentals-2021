function solve(input) {
    let text = input[0];
    let pattern = input[1];
    while (text.length > 0 && pattern.length > 0) {
        if (text.includes(pattern)) {
            if (text.indexOf(pattern) !== text.lastIndexOf(pattern)) {
                let startIndex = text.indexOf(pattern);
                let endIndex = text.lastIndexOf(pattern);
                let startEnd = startIndex + pattern.length;
                let endEnd = endIndex + pattern.length;
                let newText = text.substring(0, Math.max(0, startIndex)) + text.substring(startEnd, endIndex);
                if (endEnd < text.length) {
                    newText += text.substring(endEnd, text.length);
                }
                text = newText;
                console.log(`Shaked it.`);
                let symb = pattern[Math.floor(pattern.length / 2)];
                pattern = pattern.replace(symb, "");
            } else {
                console.log(`No shake.`);
                break;
            }
        } else {
            console.log(`No shake.`);
            break;
        }
    }
    console.log(text);
}
solve(["stastasta", "sta"]);
//solve(["##mtm!!mm.mm*mtm.#", "mtm"]);
