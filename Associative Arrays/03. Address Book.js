function solve(input) {
    let addressbook = {}

    for (const line of input) {
        let [name, address] = [...line.split(':')]
        addressbook[name] = address
    }
    let sorted = Object.entries(addressbook)
    sorted.sort((a,b) => a[0].localeCompare(b[0]))

    for (const person of sorted) {
        console.log(`${person[0]} -> ${person[1]}`);
    }
}
solve(["Tim:Doe Crossing", "Bill:Nelson Place", "Peter:Carlyle Ave", "Bill:Ornery Rd"]);
