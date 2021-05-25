function solve(arr) {
    let num = 1;
    let  result = [];
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        
        if (command === 'add') {
            result.push(num);
        } else if (command === 'remove') {
            result.pop();
        }
        num++
    }
    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log('Empty');
    }
}
solve(['add','add','add','add'])
solve(['add','add','remove','add','add'])
solve(['remove','remove','remove'])