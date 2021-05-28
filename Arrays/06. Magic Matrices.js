function solve(matrix) {
    let initialSum =0

    let isMagic = true;
    for (let rows = 0; rows < matrix.length; rows++) {
        let sumRow = 0;
        let sumCol = 0;
        for (let cols = 0; cols < matrix[rows].length; cols++) {
            if (rows === 0) {
                initialSum += matrix[rows][cols]
            }
            sumRow += matrix[rows][cols]
            sumCol += matrix[cols][rows];
            
        }
        if (sumRow !== initialSum && sumCol !== initialSum) {
            isMagic = false;
            break;
        }
    }
    let result = isMagic ? 'true' : 'false';
    console.log(result);
}
solve([[1, 5, 6],
       [6, 5, 4],
       [5, 5, 5]])
