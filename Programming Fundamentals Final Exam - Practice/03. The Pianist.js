function solve(input) {
    let n = Number(input.shift());
    let collection = [];
    let col = {};
    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split("|");
        collection.push({ piece: piece, composer: composer, key: key });
        col[piece] = {};
        col[piece]["composer"] = composer;
        col[piece]["key"] = key;
    }
    let line = input.shift();
    while (line !== "Stop") {
        let [command, first, second, third] = line.split("|");
        switch (command) {
            case "Add":
                if (col.hasOwnProperty(first)) {
                    console.log(`${first} is already in the collection!`);
                } else {
                    col[first] = {};
                    col[first]["composer"] = second;
                    col[first]["key"] = third;
                    console.log(`${first} by ${second} in ${third} added to the collection!`);
                }
                break;
            case "Remove":
                if (col.hasOwnProperty(first)) {
                    delete col[first];
                    console.log(`Successfully removed ${first}!`);
                } else {
                    console.log(`Invalid operation! ${first} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                if (col.hasOwnProperty(first)) {
                    col[first]["key"] = second;
                    console.log(`Changed the key of ${first} to ${second}!`);
                } else {
                    console.log(`Invalid operation! ${first} does not exist in the collection.`);
                }
                break;
        }
        line = input.shift();
    }
    for (const [k,v] of Object.entries(col).sort((a,b) => sortByComposerName(a,b))) {
        console.log(`${k} -> Composer: ${v['composer']}, Key: ${v['key']}`);
    }
    function sortByComposerName(a,b) {
        if (a[0] > (b[0])) {
            return 1;
        } else if (a[0] < (b[0])) {
            return -1;
        } else {
            if (a[1]['composer'] > b[1]['composer']) {
                return 1;
            } else if (a[1]['composer'] < b[1]['composer']) {
                return -1;
            } else {
                return 0;
            }
        }
    }
}
solve([
    "3",
    "Fur Elise|Beethoven|A Minor",
    "Moonlight Sonata|Beethoven|C# Minor",
    "Clair de Lune|Debussy|C# Minor",
    "Add|Sonata No.2|Chopin|B Minor",
    "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
    "Add|Fur Elise|Beethoven|C# Minor",
    "Remove|Clair de Lune",
    "ChangeKey|Moonlight Sonata|C# Major",
    "Stop",
]);
