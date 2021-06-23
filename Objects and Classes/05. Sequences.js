function solve(input) {
    let arrayOfArrays = []
    for (let i = 0; i < input.length; i++) {
        let current = input[i]
        let currentArray = (current.substring(1, current.length-1)).split(', ')
        arrayOfArrays.push(currentArray.sort((a,b) => b - a))
    }
    let result = []
    for (let i = 0; i < arrayOfArrays.length-1; i++) {
        for (let j = i+1; j < arrayOfArrays.length; j++) {
            //console.log("i", arrayOfArrays[i].toString());
            //console.log("j",arrayOfArrays[j].toString());
            if (arrayOfArrays[i].toString() !== arrayOfArrays[j].toString()) {
                result.push(arrayOfArrays[i].join(', '))
            }
        }
    }
    result.sort((a,b) => a.length - b.length)
    result.forEach(element => {
        console.log(`[${element}]`);
    });
}
solve(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
