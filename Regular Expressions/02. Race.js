function solve(input) {
    let result = {};
    let racers = input.shift().split(", ");
    let line = input.shift();
    let nameRegex = /[A-z]/g;
    let numsRegex = /\d/g;
    let removeExtraChars = /\w/;
    while (line !== "end of race") {
        line = line.replace(/\W/g, "");
        let name = line.match(nameRegex).join("");
        let distance = line.match(numsRegex);
        let total = 0;
        for (const num of distance) {
            total += Number(num);
        }
        if (racers.includes(name)) {
            if (!result.hasOwnProperty(name)) {
                result[name] = total;
            } else {
                result[name] += total;
            }
        }
        line = input.shift();
    }
    let sortedResult = Object.entries(result).sort((a,b) => b[1] - a[1])
    console.log(`1st place: ${sortedResult[0][0]}`);
    console.log(`2nd place: ${sortedResult[1][0]}`);
    console.log(`3rd place: ${sortedResult[2][0]}`);
}
solve([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race",
]);
