function solve(input) {
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let validNames = [];
    //validName = null;
    while ((validName = pattern.exec(input)) !== null) {
        validNames.push(validName[0])
    }
    console.log(validNames.join(', '));
}
solve(['+359 2 222 2222',
    '+359-2-222-2222'
    ])