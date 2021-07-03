function solve(input) {
    let arr = input.split(' ')
    let sum = 0
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            sum += Number(arr[i])
        }
        let avarage = sum / arr.length;
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (Number(arr[i]) > avarage) {
                result.push(Number(arr[i]))
            }
        }
        result.sort((a,b) => b - a)
        if (result.length > 5) {
            let print = result.splice(0, 5)
            result = print
        }
        console.log(result.join(' '));
    } else {
        console.log(`No`);
    }
}
solve('10 20 30 40 50')