function solve(arr) {
    let oddSum = 0;
    let evenSum = 0;
    for (let n of arr){
        if (Number(n) % 2 === 0) {
            evenSum += Number(n);
        }
        else {
            oddSum += Number(n);
        }
    }
    console.log(evenSum - oddSum);
}
solve(['1','2','3','4','5','6'])