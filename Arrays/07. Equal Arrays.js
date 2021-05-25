function solve(arr1, arr2) {
    let diffAt = 0
    let different = false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            continue;
        } else {
            diffAt = i;
            different = true;
            break;
        }
    }
    if (different) {
        console.log(`Arrays are not identical. Found difference at ${diffAt} index`);
    } else {
        let sum = 0;
        for (let n of arr1) {
            sum += Number(n);
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['10', '20', '30'], ['10', '4', '30'])