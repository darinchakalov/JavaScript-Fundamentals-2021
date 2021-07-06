function solve(input) {
    let neibghourhoods = input.shift().split(', ')
    let map = new Map()
    for (const street of neibghourhoods) {
        map.set(street, [])
    }
    for (const line of input) {
        let [lineStreet, name] = line.split(' - ') 
        if (map.has(lineStreet)) {
            map.set(lineStreet, map.get(lineStreet).concat(name))
        }
    }
    let sorted = Array.from(map).sort((a,b) => sorting(a,b));

    for (const [key,value] of sorted) {
        console.log(`${key}: ${value.length}`);
        for (const name of value) {
            console.log(`--${name}`);
        }
    }
    function sorting(a,b) {
        let countA = a[1].length;
        let countB = b[1].length;
        return countB - countA;
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)