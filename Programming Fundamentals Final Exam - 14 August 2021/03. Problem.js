function solve(input) {
    let wordDefinitions = input[0].split(' | ');
    let tests = input[1].split(' | ');
    let command = input[2];
    let dictionary = {}
    for (const comb of wordDefinitions) {
        let [word, description] = comb.split(": ")
        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = []
            dictionary[word].push(description)
        } else {
            dictionary[word].push(description)
        }
    }

    if (command === 'Test') {
        for (const test of tests) {
            if (dictionary.hasOwnProperty(test)) {
                let descriptions = dictionary[test].sort((a,b) =>  b.length - a.length)
                console.log(`${test}:`);
                for (const desc of descriptions) {
                    console.log(` -${desc}`);
                }
            }
        }
    } else {
        let words = Object.keys(dictionary).sort((a,b) => a.localeCompare(b))
        
        console.log(words.join(' '));
    }

}
solve(["programmer: an animal, which turns coffee into code | developer: a magician", "fish | domino", "Hand Over"]);
solve(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"])