function solve(input) {
    let printLine = ''
    let decodingMatrix = []
    let decodingMatrixSize = Number(input.shift());
    for (let i = 0; i < decodingMatrixSize; i++) {
        decodingMatrix.push(input.shift().split(' ').map(Number))
    }
    let templateMatrix = []
    input.forEach(element => {
        templateMatrix.push(element.split(' ').map(Number))
    });

    let templateMatrixRows = templateMatrix.length;
    let templateMatrixCols = templateMatrix[0].length;

    let decodingMatrixRows = decodingMatrix.length;
    let decodingMatrixCols = decodingMatrix[0].length;

    if (templateMatrixRows > decodingMatrixRows) {
        for (let i = 0; i < templateMatrix.length; i++) {
            if (i > decodingMatrixRows - 1) {
                decodingMatrix.push([])
            }
            for (let j = 0; j < templateMatrix[i].length; j++) {
                if (j > decodingMatrixCols - 1) {
                    decodingMatrix[i][j] = decodingMatrix[i][j - decodingMatrixCols];
                }
                if (i > decodingMatrixRows - 1) {
                    if (j > decodingMatrixCols - 1) {
                        decodingMatrix[i][j] = decodingMatrix[i - decodingMatrixRows][j - decodingMatrixCols];
                    } else {
                        decodingMatrix[i][j] = decodingMatrix[i - decodingMatrixRows][j];
                    }
                }
            }

        }
    }

    for (let i = 0; i < templateMatrix.length; i++) {
        for (let j = 0; j < templateMatrix[i].length; j++) {
            templateMatrix[i][j] += decodingMatrix[i][j]
            printLetter(templateMatrix[i][j])
        }

    }

    console.log(printLine);
    function printLetter(num) {
        let correctNum = 0

        while (num > 26) {
            num -= 27
        }
        if (num !== 0) {
            printLine += String.fromCharCode(num + 64)
        } else {
            printLine += ' '
        }

        return printLine
    }
}
solve(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'])