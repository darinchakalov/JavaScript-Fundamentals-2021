function solve(input) {
    let guestList = input.splice(0, input.indexOf("PARTY"));
    input.shift();
    let vipGuests = [];
    let regularGuests = [];
    for (const guest of guestList) {
        if (guest[0] >= "0" && guest[0] <= "9") {
            vipGuests.push(guest);
        } else {
            regularGuests.push(guest);
        }
    }
    for (const guest of input) {
        if (vipGuests.includes(guest)) {
            vipGuests.splice(vipGuests.indexOf(guest), 1);
        }
        if (regularGuests.includes(guest)) {
            regularGuests.splice(regularGuests.indexOf(guest), 1);
        }
    }
    console.log(regularGuests.length + vipGuests.length);
    vipGuests.forEach(guest => {
        console.log(guest);
    });
    regularGuests.forEach(guest => {
        console.log(guest);
    });
}
//solve(["7IK9Yo0h", "9NoBUajQ", "Ce8vwPmE", "SVQXQCbc", "tSzE5t0p", "PARTY", "9NoBUajQ", "Ce8vwPmE", "SVQXQCbc"]);
solve([
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "xys2FYzn",
    "MDzcM9ZK",
    "PARTY",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
]);
