function numberModifier(num) {
    let sum = 0;
    let n = num.toString()
    
    if (sumCheck(n, sum) / n.length >= 5) {
        console.log(n);
    } else {
        while (sumCheck(n, sum) / n.length < 5) {
            n += '9'
        }
        console.log(n);
    }

    function sumCheck(str, sum) {
        for (let i = 0; i < str.length; i++) {
            sum += Number(n[i])
        }
        return sum;
    }
}
numberModifier(101)