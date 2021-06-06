function solve(arr, rotations) {
    let rotateNum = 0
    let lastElement = 0;
    for (let i = 0; i < rotations; i++) {
        rotateNum = arr[0];
        for (let j = 0; j < arr.length -1; j++) {
            
            arr[j] = arr[j+1]
            
        }
        arr[arr.length-1]= rotateNum
    }
    console.log(arr.join(' '));

}
solve([32, 21, 61, 1],2 );