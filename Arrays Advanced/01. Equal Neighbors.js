function solve(input) {
    let same = 0;
    for (let i = 0; i < input.length; i++) {
        if (i <= input.length - 2) {
            let current = input[i];
            let next = input[i + 1];
            for (let j = 0; j < current.length; j++) {
                if (current[j] === next[j]) {
                    same++;
                }
            }
        }
        
    }
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        for (let j = 0; j < current.length; j++) {
            if (current[j] === current[j + 1]) {
                same++;
            }
        }
    }
    console.log(same);
}
/*solve([['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']])*/
solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']])