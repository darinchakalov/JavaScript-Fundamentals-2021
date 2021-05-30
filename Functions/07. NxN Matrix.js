function nXnMatrix(num) {
    var matrix = [];
    function fillEmptyMatrix(n) {
        for (let rows = 0; rows < n; rows++) {
            matrix.push([])
            for (let cols = 0; cols < n; cols++) {
                matrix[rows].push(n)
            }
        }
    }
    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
    fillEmptyMatrix(num);
    printMatrix(matrix)
}
nXnMatrix(7)