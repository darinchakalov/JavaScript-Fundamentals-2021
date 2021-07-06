function solve(input) {
    let arr = input.split(' ')
    let map = new Map();
    for (const word of arr) {
        if (!map.has(word.toLowerCase())) {
            map.set(word.toLowerCase(), 1)
        } else {
            map.set(word.toLowerCase(), map.get(word.toLowerCase())+1)
        }
    }
    let result = [];
    for (const [key,value] of map) {
        if (value % 2 !== 0) {
            result.push(key)
        }
    }
    console.log(result.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')