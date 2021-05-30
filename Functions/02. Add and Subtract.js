function addAndSubstract(n1, n2, n3) {
    function sum(a, b) {
        var result = a + b;
        return result;
    }
    function substract(a, b) {
        var res = a - b;
        console.log(res);
    }
    substract(sum(n1, n2), n3)
}
addAndSubstract(23, 6, 10)