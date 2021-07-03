function solve(input) {
    let [first, second, third] = [Number(input[0]), Number(input[1]), Number(input[2])];
    let numberOfStudents = Number(input[3]);
    let questionsPerHour = first + second + third;
    let hours = 0
    while (numberOfStudents > 0) {
        hours++
        if (hours % 4 === 0) {
            hours++
        }
        numberOfStudents -= questionsPerHour
    }
    console.log(`Time needed: ${hours}h.`);
}
solve([5,6,4,20]);
