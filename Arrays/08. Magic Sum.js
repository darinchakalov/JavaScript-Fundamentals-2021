function solve(arr, sum) {
    
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            let next = arr[j];
            if (current + next === sum) {
                console.log(`${current} ${next}`);
            }
        }
        
    }
}
solve([1, 7, 6, 2, 19, 23],8)