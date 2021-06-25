function solve(input) {
    let neighbourhood = input.shift().split("@").map(Number);
    let command = input.shift();
    let possition = 0;
    while (command !== "Love!") {
        let current = command.split(" ");
        let [jump, count] = [current[0], Number(current[1])];
        possition += count;
        if (possition > neighbourhood.length - 1) {
            possition = 0;
        }
        if (neighbourhood[possition] <= 0) {
            console.log(`Place ${possition} already had Valentine's day.`);
        } else {
            neighbourhood[possition] -= 2;
            if (neighbourhood[possition] <= 0) {
                console.log(`Place ${possition} has Valentine's day.`);
            }
        }
        command = input.shift();
    }
    let notDone = 0
    neighbourhood.forEach(house => {
        if (house > 0) {
            notDone ++
        }
    });
    console.log(`Cupid's last position was ${possition}.`);
    if (notDone > 0) {
        console.log(`Cupid has failed ${notDone} places.`);
    } else{
        console.log(`Mission was successful.`);
    }
}
//solve(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
solve(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!'])
