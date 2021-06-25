function solve(input) {
    let arrayOfArrays = []
    for (let i = 0; i < input.length; i++) {
        let current = input[i]
        let currentArray = (current.substring(1, current.length-1)).split(', ').map(Number)
        arrayOfArrays.push(currentArray.sort((a,b) => b - a))
    }
    let notEqual = false;
    let result = []
    result.push(arrayOfArrays.shift())
    for (let i = 0; i < arrayOfArrays.length-1; i++) {
        for (let j = i+1; j < arrayOfArrays.length; j++) {
            let current = arrayOfArrays[i]
            let next = arrayOfArrays[j]
            if (current.length === next.length) {
                for (let k = 0; k < current.length; k++) {
                    //console.log(current[k], next[k]);
                    if (current[k] !== next[k]) {
                        console.log(current[k].toFixed(3));
                        notEqual = true;
                        break
                    }
                    if (notEqual) {
                        result.push(arrayOfArrays[i])
                    }
                }
            } else {
                result.push(arrayOfArrays[i])
            }
        }
    }
    result.sort((a,b) => a.length - b.length)
    result.forEach(element => {
        console.log(`[${element.join(', ')}]`);
    });
}
//solve(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
solve(['[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'])