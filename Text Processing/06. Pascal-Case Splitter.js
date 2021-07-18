function solve(input) {
    let result = [];
    let res2 = [];
    let arr = [];
    for (const l of input) {
        arr.push(l);
    }
    let word = arr.shift();
    while (arr.length > 0) {
        let letter = arr.shift();
        if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
            res2.push(word);
            word = letter;
        } else {
            word += letter;
        }
    }
    res2.push(word);
    console.log(res2.join(", "));

    /*for (const w of input) {
        let index = input.indexOf(w)
        if (index !== 0) {
            if (w.charCodeAt(0) >= 65 && w.charCodeAt(0) <= 90) {
                let word = input.substring(0, index);
                //word =word.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
                //word = word.split(' ').join(', ').toString()
                result.push(word)
                input = input.substring(index, input.length)
            }
        }
    }
    result.push(input)*/
    //console.log(result.join(', '));
}
solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
solve("AaAaa");
