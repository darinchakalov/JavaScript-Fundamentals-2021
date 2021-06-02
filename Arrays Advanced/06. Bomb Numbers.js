function solve(sequence, bombNumbers) {
    let num = bombNumbers[0];
    let power = bombNumbers[1];
    let result = 0;
    while (sequence.includes(num)) {
        let location = sequence.indexOf(num);
        let startIndex = location - power
        let elementsToRemove = power * 2 + 1;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0
        }
        sequence.splice(startIndex, elementsToRemove)
    }
    sequence.forEach(element => {
        result += element;
    });
    console.log(result);
}
//solve([1,2,2,4,2,2,2,9],[4,2])
//solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1,2], [2, 1])
solve([1, 4, 1, 1, 1, 1, 1, 4, 1],[4,2])