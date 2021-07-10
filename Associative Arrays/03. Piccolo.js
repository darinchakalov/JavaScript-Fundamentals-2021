function solve(input) {
    let arr = []
    for (let i = 0; i < input.length; i++) {
        let [command, number] = input[i].split(', ')
        if (command === 'IN') {
            if (!arr.includes(number)) {
                arr.push(number)
            }
        } else {
            if (arr.includes(number)) {
                let index = arr.indexOf(number)
                arr.splice(index, 1)
            }
        }
    }
    let sorted = arr.sort((a,b) => a.localeCompare(b))

    if (sorted.length > 0) {
        for (const num of sorted) {
            console.log(num);
        }
    } else {
        console.log("Parking Lot is Empty");
    }
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])