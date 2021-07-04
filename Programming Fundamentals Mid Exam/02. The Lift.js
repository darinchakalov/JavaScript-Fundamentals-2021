function solve(input) {
    let waiting = Number(input.shift());
    let lift = input[0].split(" ").map(Number);
    for (let i = 0; i < lift.length; i++) {
        if (waiting > 0) {
            let availableSeats = 4 - lift[i];
            if (availableSeats > waiting) {
                lift[i] += waiting
                waiting = 0
            } else {
                lift[i] += availableSeats
                waiting -= availableSeats
            }
        }
    }
    let emptySeats = 0;
    lift.forEach((element) => {
        if (element < 4) {
            emptySeats += 4 - element;
        }
    });
    if (waiting === 0 && emptySeats > 0) {
        console.log(`The lift has empty spots!`);
    } else if(waiting > 0  && emptySeats === 0) {
        console.log(`There isn't enough space! ${waiting} people in a queue!`);
    }
    console.log(lift.join(' '));
}
solve([15, "0 0 0 0"]);
