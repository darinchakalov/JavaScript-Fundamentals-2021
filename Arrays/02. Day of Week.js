function solve(num) {
    let daysOfWeek = ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    if (num > daysOfWeek.length || num < 1) {
        console.log('Invalid day!');
    } else {
        console.log(daysOfWeek[num-1]);
    }
}
solve(0)