function solve(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let index = 0;
    let found = false; 
    if (arr.length > 1) {
        for (let i = 1; i < arr.length; i++) {
            let leftArr = [];
            let rightArr = [];
            for (let j = 0; j < i; j++) {
                leftArr.push(arr[j])
                leftSum += arr[j]
            }
            for (let j = i+1; j < arr.length; j++) {
                rightArr.push(arr[j])
                rightSum += arr[j]
            }
            if (leftSum === rightSum) {
                index = i;
                found = true
            } else {
                leftSum = 0;
                rightSum = 0;
            }
        }
        if (found) {
            console.log(index);
        } else {
            console.log('no');
        }
    } else {
        console.log(0);
    }
}
solve([1,2,3,3]);