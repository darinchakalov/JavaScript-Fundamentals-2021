function solve(arr) {
    class Flights {
        constructor(number, destination) {
            this.number = number;
            this.destination = destination;
        }
        status = 'Ready to fly'
    }
    let flights = arr[0]
    let changes = arr[1]
    let show = arr[2]
    let result = []
    for (let i = 0; i < flights.length; i++) {
        let [num, dest] = flights[i].split(' ')
        result.push(new Flights(num, dest))
    }
    for (let i = 0; i < result.length; i++) {
        changes.forEach(el => {
            let current = el.split(' ')
            if (current[0] === result[i].number) {
                result[i].status = current[1]
            }
        });
    }
    result.forEach(el => {
        if (el.status === show[0]) {
            console.log(`{ Destination: '${el.destination}', Status: '${el.status}' }`);
        }
    });
}
solve([
    [
        "WN269 Delaware",
        "FL2269 Oregon",
        "WN498 Las Vegas",
        "WN3145 Ohio",
        "WN612 Alabama",
        "WN4010 New York",
        "WN1173 California",
        "DL2120 Texas",
        "KL5744 Illinois",
        "WN678 Pennsylvania",
    ],
    ["DL2120 Cancelled", "WN612 Cancelled", "WN1173 Cancelled", "SK430 Cancelled"],
    ["Cancelled"],
]);
