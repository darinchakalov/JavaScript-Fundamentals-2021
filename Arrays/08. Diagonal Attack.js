function solve(matrix) {
    let parsedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        parsedMatrix[i] = matrix[i].split(' ');
    }
    let mainDiagonalSum = 0;
    let reverscedDiagonalSum = 0;
    for (let rows = 0; rows < parsedMatrix.length; rows++) {
        mainDiagonalSum += Number(parsedMatrix[rows][rows]);
        reverscedDiagonalSum += Number(parsedMatrix[rows][parsedMatrix.length -1 - rows]);    
    }
    if (mainDiagonalSum === reverscedDiagonalSum) {
        for (let rows = 0; rows < parsedMatrix.length; rows++) {
            for (let cols = 0; cols < parsedMatrix.length; cols++) {
                if (rows === cols || rows + cols + 1 === parsedMatrix.length) {
                    continue;
                } 
                else{
                    parsedMatrix[rows][cols] = mainDiagonalSum;
                }
            }
        }
        for (let i = 0; i < parsedMatrix.length; i++) {
            console.log(parsedMatrix[i].join(' '));
        }
    } else {
        for (let i = 0; i < parsedMatrix.length; i++) {
            console.log(parsedMatrix[i].join(' '));
        }
    }

}
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)