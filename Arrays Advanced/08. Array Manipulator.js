function solve(numbers, strings) {
    while (strings.length !== 0) {
        let current = strings[0].split(' ')
        let command = current.shift()

        switch (command) {
            case 'add':
                let index = Number(current.shift());
                let element = Number(current.shift());
                add(element, index)
                break;
            case 'addMany':
                let currentAdd = Number(current.shift());
                while (current.length !== 0) {
                    let element = Number(current.shift())
                    addMany(element, currentAdd);
                    currentAdd++
                }
                break;
            case 'contains':
                let exist = Number(current.shift());
                console.log(numbers.indexOf(exist));
                break;
            case 'remove':
                let toRemove = Number(current.shift());
                if (toRemove >=0 && toRemove <=numbers.length) {
                    numbers.splice(toRemove, 1);
                }
                break;
            case 'shift':
                let rotations = Number(current.shift());
                rotate(rotations);
                break;
            case 'sumPairs':
                sum();
                break;
        }
        if (command === 'print') {
            break;
        } else {
            strings.shift();
        }

    }
    console.log('[ ' + numbers.join(', ') + ' ]');
    //console.log(`[ ${numbers.join(', ')} ]`);

    function add(num, index) {
        numbers.splice(index, 0, num)
    }
    function addMany(num, index) {
        numbers.splice(index, 0, num)
    }
    function rotate(times) {
        for (let i = 0; i < times; i++) {
            numbers.push(numbers.shift())
        }
    }
    function sum() {
        let result = []
        for (let i = 0; i < numbers.length; i+=2) {
            if (numbers[i+1] === undefined) {
                result.push(numbers[i])
            } else {
                result.push(numbers[i]+numbers[i+1])
            }
        }
        numbers = result;
    }

}
//solve([1,2,3,4,5,6,7],["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"])
solve([1, 2, 4, 5, 6, 7], ['addMany 1 8 12 -5', 'contains 1', 'contains 3', 'sumPairs', 'print'])