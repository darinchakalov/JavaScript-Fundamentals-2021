function solve(arr) {
    let rows = arr[0]
    let cols = arr[1]
    let x = arr[2]
    let y = arr[3]
    let matrix = []
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }
    matrix[x][y] = 1;
    let num = 1;
    //top loop
    for (let pos = x-1; pos <= y + 1; pos++) {
        num++;
        matrix[x - 1][y] = num
    }
}
solve([5, 5, 2, 2])