function solve([input]) {
    let arr = input.split('');
    let result = {};

    for (let i = 0; i < input.length; i++) {
        if (!result.hasOwnProperty(input[i])) {
            result[input[i]] = []
            result[input[i]].push(i)
        } else {
            result[input[i]].push(i)
        }
    }
    for (const [letter, indexes] of Object.entries(result)) {
        console.log(`${letter}:${indexes.join('/')}`);
    }
}
solve([ 'abababa', '' ])