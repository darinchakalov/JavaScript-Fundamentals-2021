function solve(city) {

    let entries = Object.entries(city)
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
//solve('Sofia', 492, 1238438, 'Bulgaria', 1000)
solve({name: 'Sofia', area: 492, population: 1238438, country: 'Bulgaria', postcode: 1000})