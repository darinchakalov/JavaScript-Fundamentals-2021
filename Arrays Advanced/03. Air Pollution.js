function solve(map, forces) {
    let mapOfSofia = []
    map.forEach(element => {
       mapOfSofia.push(element.split(' ').map(Number)) 
    });
    forces.forEach(element => {
        let [command, value] = element.split(' ')
        switch (command) {
            case 'breeze':
                breeze(value, mapOfSofia)
                break;
            case 'gale':
                gale(value, mapOfSofia)
                break;
            case 'smog':
                smog(value, mapOfSofia)
                break;
        }
    });
    let result = []
    for (let i = 0; i < mapOfSofia.length; i++) {
        for (let j = 0; j < mapOfSofia[i].length; j++) {
            if (mapOfSofia[i][j] > 49) {
                result.push(`[${i}-${j}]`)
            }
            
        }
        
    }
    if (result.length > 0) {
        console.log(`Polluted areas: ${result.join(', ')}`);
    } else {
        console.log(`No polluted areas`)
    }
    function breeze(value, map) {
        for (let i = 0; i < map.length; i++) {
            if (i === Number(value)) {
                for (let j = 0; j < map[i].length; j++) {
                    map[i][j] = Math.max(map[i][j] - 15, 0);
                }
            }

        }
    }
    function gale(value, map) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (j === Number(value)) {
                    map[i][j] = Math.max(map[i][j] - 20, 0);
                }
            }
        }
    }
    function smog(value, map) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                map[i][j] += Number(value)
            }
        }
    }
}
solve(["5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24"],
    ["breeze 1", "gale 2", "smog 25"])

solve(["5 7 3 28 32",
"41 12 49 30 33",
"3 16 20 42 12",
"2 20 10 39 14",
"7 34 4 27 24"],
[ "smog 11", "gale 3", "breeze 1", "smog 2"]
)
solve(["5 7 2 14 4",
"21 14 2 5 3",
"3 16 7 42 12",
"2 20 8 39 14",
"7 34 1 10 24"],
["breeze 1", "gale 2", "smog 35"]
)