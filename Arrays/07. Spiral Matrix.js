function solve(rows, cols) {
    let result = [];
    for (let i = 0; i < rows; i++) {
        result.push([])
    }
    let num = 1;
    let startRow = 0
    let startCol = 0;
    let endRow = rows - 1;
    let endCol = cols - 1;

    while (startCol <= endCol || startRow <= endRow) {
        for (let top = startCol; top <= endCol; top++) {
            result[startRow][top] = num;
            num++;
        }
        startRow++;
        for (let right = startRow; right <= endRow; right++) {
            result[right][endCol] = num
            num++;
        }
        endCol--;
        for (let bottom = endCol; bottom >= startCol; bottom--) {
            result[endRow][bottom] = num;
            num++;
        }
        endRow--;
        for (let left = endRow; left >= startRow; left--) {
            result[left][startCol] = num;
            num++
        }
        startCol++;
    }
    for (let print = 0; print < result.length; print++) {
        console.log(result[print].join(' '));
        
    }
}
solve(5, 5)