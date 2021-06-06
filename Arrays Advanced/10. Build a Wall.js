function solve(input) {
    let wall = input.map(Number);
    let cement = 0;
    let initalCheck = wall.filter(function (e) {
        return e !== 30
    })
    let result = []
    wall = initalCheck;

    let crews = wall.length;
    while (crews !== 0) {
        let dayCement = 0;
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i]++;
                dayCement += 195;
                cement += 195
                if (wall[i] === 30) {
                    crews--;
                }
            } 
        }
        result.push(dayCement);
    }


    console.log(result.join(', '));
    console.log(`${cement * 1900} pesos`);

}
solve([21, 25, 28])
solve([17, 22, 17, 19, 17])