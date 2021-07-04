function solve(input) {
    let numberOfMoves = 0;
    let won = true;
    let sequence = input.shift().split(" ");
    let line = input.shift();
    let cheat = false;
    while (sequence.length > 0) {
        numberOfMoves++;
        if (line === "end") {
            won = false;
            break;
        }
        let [index1, index2] = [...line.split(" ")].map(Number);
        if (index1 < 0 || index1 > sequence.length || index2 < 0 || index2 > sequence.length || index1 === index2) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let element = `-${numberOfMoves.toString()}a`;
            let middleIndex = Math.floor(sequence.length / 2);
            sequence.splice(middleIndex, 0, element);
            sequence.splice(middleIndex, 0, element);
        } else {
            if (sequence[index1] == sequence[index2]) {
                console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
                sequence.splice(index1, 1);
                if (index2 > 0) {
                    sequence.splice(index2-1, 1);
                } else {
                    sequence.splice(index2, 1);
                }
            } else {
                console.log(`Try again!`);
            }
        }
        line = input.shift();
    }
    if (won) {
        console.log(`You have won in ${numberOfMoves} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(sequence.join(" "));
    }
}
//solve(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0 ", "1 0", "end"]);
solve(['a 2 4 a 2 4',
    '0 3',
    '0 2',
    '0 1',
    '0 1',
    'end'])
