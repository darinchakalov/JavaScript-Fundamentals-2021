function solve(input) {
    let person = JSON.parse(input)
    console.log(person);
    let entries = Object.entries(person)
    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')