function solve(input) {
    let coordinates = input.pop().split(' ')
    let matrix = []
    // creating the matrix
    input.forEach(element => {
        matrix.push(element.split(' ').map(Number))
    });
    let enemies = 0
    let damage = 0
    coordinates.forEach(element => {
        let bombBunny = element.split(',')
        let row = Number(bombBunny[0])
        let col = Number(bombBunny[1])
        let bomb = matrix[row][col]
        if (bomb > 0) {
            for (let r = 0; r < matrix.length; r++) {
                for (let c = 0; c < matrix[r].length; c++) {
                    if (r === row) {
                        matrix[r][col - 1] = Math.max(matrix[r][col - 1] - bomb, 0)
                        matrix[r][col + 1] = Math.max(matrix[r][col + 1] - bomb, 0)
                        break;
                    } else if (r === row - 1 || r === row + 1) {
                        if (c >= col - 1 && c <= col + 1) {
                            matrix[r][c] = Math.max(matrix[r][c] - bomb, 0)
                        }
                    }
                }
            }
            damage += bomb
            enemies++
            matrix[row][col] = 0;
        }
    })
    // once the exclosions are done we go through the matrix one core to kill the rest of the bunnues
    // and collect the kill count and damage
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] > 0) {
                enemies++;
                damage += matrix[r][c]
            }
        }
    }
    //console.log(matrix.map(row => row.join(' ')).join("\n"));
    console.log(damage);
    console.log(enemies);
}
solve(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']
)

