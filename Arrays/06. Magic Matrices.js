function solve(matrix) {
    let sumRow = 0;
    let sumCol = 0;
    let mainDiagonalSum = 0;
    let reverseDiagonalSum = 0;
    let isMagic = true;
    for (let rows = 0; rows < matrix.length; rows++) {
        for (let cols = 0; cols < matrix[rows].length; cols++) {
            sumRow += matrix[rows][cols];
            sumCol += matrix[cols][rows];
            if (!sumRow === sumCol) {
                isMagic = false;
                break;
            }

            if (rows == cols) {
                mainDiagonalSum += matrix[rows][cols];
                reverseDiagonalSum += matrix[rows][matrix.length -1 -rows]
            }
        }
    }
    if ( !mainDiagonalSum === reverseDiagonalSum) {
        isMagic = false;
    }

    console.log(mainDiagonalSum);
    console.log(reverseDiagonalSum);
    //let result = sumCol === sumRow === mainDiagonalSum === reverseDiagonalSum ? "true" : "false";
    console.log(result);
}
solve([[4, 5, 6],
       [6, 5, 4],
       [5, 5, 5]])