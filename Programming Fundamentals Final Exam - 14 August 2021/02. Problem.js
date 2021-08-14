function solve(input) {
    let lines = Number(input.shift());
    let pattern = /(.+)>(?<nums>[0-9]{3})\|(?<lows>[a-z]{3})\|(?<highs>[A-Z]{3})\|(?<sybs>[^\<\>]{3})<\1/g;
    for (let i = 0; i < lines; i++) {
        let passwordCheck = input[i];
        if (passwordCheck.match(pattern)) {
            let pass = pattern.exec(passwordCheck);
            let nums = pass[2];
            let lows = pass[3];
            let highs = pass[4];
            let symbs = pass[5];
            let password = nums + lows + highs + symbs;
            console.log(`Password: ${password}`);
        } else {
            console.log("Try another password!");
        }
    }
}
solve(["3", "##>00|no|NO|!!!?<###", "##>123|yes|YES|!!!<##", "$$<111|noo|NOPE|<<>$$"]);
