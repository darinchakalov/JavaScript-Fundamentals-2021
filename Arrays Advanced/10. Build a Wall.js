function solve(input) {
    let wall = input.map(Number);
    let cement = 0;
    let dayCement = 0;
    let firstLine = []
    while (wall.length !== 0) {
        wall.forEach(element => {
            check(element)
        });
        if (dayCement !== 0) {
            firstLine.push(dayCement)
        }
        dayCement = 0;
    }
    
    console.log(firstLine.join(', '));
    console.log(`${cement * 1900} pesos`);


    function check(el) {
        if (el < 30) {
            el++;
            cement += 195;
            dayCement += 195;
        } else {
            let index = wall.indexOf(el)
            wall.splice(index, 1)
        }
    }

}
//solve([21, 25, 28])
solve([17, 22, 17, 19, 17])