function solve(array) {
    let wagons = array.shift().split(' ').map(Number)
    let maxCapacity = Number(array.shift())

    for (let i = 0; i < array.length; i++) {
        let [command, num] = array[i].split(' ')
        if (command === 'Add') {
            wagons.push(Number(num));
        } else {
            num = Number(command);
            
            for (let j = 0; j < wagons.length; j++) {
                let seatsLeft = maxCapacity - wagons[j]
                if (seatsLeft >= num) {
                    wagons[j] = wagons[j] + num;
                    break;
                }
            }
            
        }

    }
    console.log(wagons.join(' '));
}
solve(['32 54 21 12 4 0 23',
    '75', 'Add 10', 'Add 0', '30', '10', '75'])



    /*let wagonIndex = 0
            while (num > 0) {
                if (wagons[wagonIndex] < maxCapacity) {
                    let wagonHas = maxCapacity - wagons[wagonIndex]
                    if (wagonHas > num) {
                        wagons[wagonIndex] = wagons[wagonIndex] + num
                        num = 0; 
                    } else {
                        num -= wagonHas;
                        wagons[wagonIndex] = maxCapacity;
                    }
                }
                wagonIndex++
            }*/