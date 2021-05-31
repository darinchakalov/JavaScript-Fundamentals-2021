function solve(n, k) {
    let result = [1];
    let sum =0
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = Math.max(current - 1, 1);

        for (let j = start; j < end; j++) {
            sum+= result[j]
        }
        /*result.slice(start, end).forEach(element => {
            sum += element
        });*/
        result[current] = sum;
    }
    console.log(result.join(' '));
}
//solve(6, 3)
solve(8,2)