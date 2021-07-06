function solve(input) {
    let map = new Map();
    for (const line of input) {
        let token = line.split(' ');
        let name = token.shift()
        grades = token.map(Number)
        if (!map.has(name)) {
            map.set(name, [])
            map.set(name, map.get(name).concat(grades))
        } else {
            map.set(name, map.get(name).concat(grades))
        }
    }

    let sorted = Array.from(map).sort((a,b) => compare(a,b))

    for (const [key, value] of sorted) {
        console.log(`${key}: ${value.join(', ')}`);
    }

    function compare(a,b) {
        let sumA = 0;
        for (let i = 0; i < a[1].length; i++) {
            sumA += a[1][i];
        }
        let sumB = 0;
        for (let i = 0; i < b[1].length; i++) {
            sumB += b[1][i];
        }
        let avarageA = sumA / a[1].length;
        let avarageB = sumB / b[1].length;
        return avarageA - avarageB;
    }
}
solve(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])