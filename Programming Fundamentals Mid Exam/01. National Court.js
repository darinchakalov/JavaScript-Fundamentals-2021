function solve(arr) {
    let first = Number(arr.shift());
    let second = Number(arr.shift());
    let third = Number(arr.shift());
    let peopleCount = Number(arr.shift());
    let peoplePerHour = first + second + third;
    let hours = 0
    while (peopleCount > 0) {
        hours++
        if (hours % 4 === 0 ) {
            hours += 1
        }
        peopleCount -= peoplePerHour
    }

    console.log(`Time needed: ${hours}h.`);
}
solve([5, 6, 4, 20]);
