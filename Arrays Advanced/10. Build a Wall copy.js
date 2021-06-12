function solve(input) {
    let wall = input.map(Number);
    let cement = 0;
    let dayCement = 0;
    let firstLine = []
    let initalCheck = wall.filter(function (e) {
        return e !== 30
    })
    wall = initalCheck;
    while (wall.length !== 0) {
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i]++;
                cement += 195;
                dayCement += 195;
                if (wall[i] === 30) {
                    let filtered = wall.filter(function (e) {
                        return e !== 30
                    });
                    wall = filtered
                    i--
                }
            }
        }
        if (dayCement !== 0) {
            firstLine.push(dayCement)
        }
        dayCement = 0;
    }
    console.log(firstLine.join(', '));
    console.log(`${cement * 1900} pesos`);

}
//solve([21, 25, 28])
solve([17, 22, 17, 19, 17])
//solve([1,1,28,1,1])