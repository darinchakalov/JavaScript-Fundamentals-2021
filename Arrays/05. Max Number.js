function solve(arr) {
    let result =[];
    //THE COMMENTED IS MY SOLUTION. THE UNCOMMENTED ONE IS BETTER!
    /*let bigger = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] > arr[j]) {
                bigger++
            }   
        }
        if (bigger === arr.length - i-1) {
            result.push(arr[i]);
        }
        bigger = 0;
    }*/
    while (arr.length !== 0) {
        let current = arr.shift()
        let biggest = Math.max(...arr)
        if (current > biggest) {
            result.push(current)
        }
    }
    console.log(result.join(' '));
}
solve([1,4,3,2])