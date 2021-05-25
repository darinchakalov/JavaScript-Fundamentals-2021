function solve(arr) {
    let arrayLenth = arr[0];
    let initialPositions = arr[1].split(' ');
    let positionArray = new Array(arrayLenth).fill(0);
    for (let i = 0; i < positionArray.length; i++) {
        let location = initialPositions[i]
        if (location < positionArray.length && location >= 0) {
            positionArray[location] = 1;
        }
    }
    for (let movement = 2; movement < arr.length; movement++) {
        let move = arr[movement].split(' ');
        let start = Number(move[0]);
        let direction = move[1];
        let fly = Number(move[2]);

        if (fly < 0) {
            fly = Math.abs(fly);
            if (direction === 'right') {
                direction = 'left';
            } else if (direction === 'left') {
                direction = 'right';
            }
        }
        let destination = 0;
        if (start >= 0 && start < arrayLenth && positionArray[start] === 1 && fly > 0) {
            positionArray[start] = 0
            if (direction === 'right') {
                destination = start + fly;
                while (positionArray[destination] === 1) {
                    destination += fly;
                }
                if (destination < arrayLenth) {
                    positionArray[destination] = 1;
                }
            } else if (direction === 'left') {
                destination = start - fly;
                while (positionArray[destination] === 1) {
                    destination -= fly;
                }
                if (destination >= 0) {
                    positionArray[destination] = 1;
                }
            }
        }
    }
    console.log(positionArray.join(' '));
}
//solve([3, '0 1', '0 right 1', '2 right 1']);
//solve([3, '1 2', '0 right 1', '1 right 1', '2 right 1']) 1 1 1 1 0
//solve([5, '0 1 2 3','0 right 1', '3 left 3', '2 right 1'])
//solve([5, '3', '3 left 2', '1 left -2'])
solve([3, '2 1 -1'])