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
            correctNum = num

        switch (correctNum) {
            case 0:
                printLine += ' '
                break;
            case 1:
                printLine += 'A'
                break;
            case 2:
                printLine += 'B'
                break;
            case 3:
                printLine += 'C'
                break;
            case 4:
                printLine += 'D'
                break;
            case 5:
                printLine += 'E'
                break;
            case 6:
                printLine += 'F'
                break;
            case 7:
                printLine += 'G'
                break;
            case 8:
                printLine += 'H'
                break;
            case 9:
                printLine += 'I'
                break;
            case 10:
                printLine += 'J'
                break;
            case 11:
                printLine += 'K'
                break;
            case 12:
                printLine += 'L'
                break;
            case 13:
                printLine += 'M'
                break;
            case 14:
                printLine += 'N'
                break;
            case 15:
                printLine += 'O'
                break;
            case 16:
                printLine += 'P'
                break;
            case 17:
                printLine += 'Q'
                break;
            case 18:
                printLine += 'R'
                break;
            case 19:
                printLine += 'S'
                break;
            case 20:
                printLine += 'T'
                break;
            case 21:
                printLine += 'U'
                break;
            case 22:
                printLine += 'V'
                break;
            case 23:
                printLine += 'W'
                break;
            case 24:
                printLine += 'X'
                break;
            case 25:
                printLine += 'Y'
                break;
            case 26:
                printLine += 'Z'
                break;
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