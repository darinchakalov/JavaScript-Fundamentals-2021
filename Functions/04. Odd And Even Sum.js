function oddAndEvenSum(numString) {
    let string = numString.toString()
    splitSums(string)
    
    function splitSums(str) {
        let oddSum = 0;
        let evenSum = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] % 2 == 0) {
                evenSum += Number(string[i]);
            } else {
                oddSum += Number(string[i])
            }
        }
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }
}
oddAndEvenSum(1000435);