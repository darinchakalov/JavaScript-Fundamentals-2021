function solve(input) {
    let pattern = /([@#$^]{6,10})/;
    let tickets = input[0].split(",");
    for (let ticket of tickets) {
        ticket = ticket.trim();
        if (ticket.length !== 20) {
            console.log(`invalid ticket`);
            
        } else {
            let firstHalf = ticket.substring(0, 10);
            let secondHalf = ticket.substring(10, 20);
            if (
                firstHalf.match(pattern) &&
                secondHalf.match(pattern) &&
                firstHalf.match(pattern)[0][0] === secondHalf.match(pattern)[0][0]
            ) {
                let more = Math.min(firstHalf.match(pattern)[0].length, secondHalf.match(pattern)[0].length);
                if (more === 10) {
                    console.log(`ticket "${ticket}" - ${more}${firstHalf.match(pattern)[0][0]} Jackpot!`);
                } else {
                    console.log(`ticket "${ticket}" - ${more}${firstHalf.match(pattern)[0][0]}`);
                }
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        }
    }
}
solve(["@@@@@@@123@@@@@@1234,       ######4123@@@@@@1234,$$$$$$$$$$##########"]);

//solve(["$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey, validticketnomatch:(, d$$$$$$ddd$$$$$$$$$%"]);
