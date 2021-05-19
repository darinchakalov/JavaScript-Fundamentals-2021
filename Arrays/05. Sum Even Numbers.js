function solve(arr) {
    let sum =0;
    for (let n of arr){
        if (Number(n) % 2 == 0) {
            sum += Number(n);
        }
    }
    console.log(sum);
}
solve(['1','2','3','4','5','6'])