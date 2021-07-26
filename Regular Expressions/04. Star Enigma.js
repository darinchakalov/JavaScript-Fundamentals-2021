function solve(input) {
    let messages = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let pattern =
        /(?<name>@[A-Za-z]+)[^@:>!-]*?(?<population>:\w+)[^@:>!-]*?(?<AorD>![AD]!)[^@:>!-]*?(?<soldiers>->\d+)/;
    for (let i = 0; i < messages; i++) {
        let realMessage = decriptMessage(input[i]);
        if (realMessage.match(pattern)) {
            let decript = pattern.exec(realMessage);
            let planet = decript.groups["name"];
            let polulation = decript.groups["population"];
            let attackOrDestroy = decript.groups["AorD"];
            let soldiers = decript.groups["soldiers"];
            planet = planet.substring(1, planet.length);
            polulation = polulation.substring(1, polulation.length);
            soldiers = soldiers.substring(2, soldiers.length);
            attackOrDestroy = attackOrDestroy.substring(1, attackOrDestroy.length - 1);
            if (attackOrDestroy === "A") {
                attackedPlanets.push(planet);
            } else {
                destroyedPlanets.push(planet);
            }
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        for (const planet of attackedPlanets.sort()) {
            console.log(`-> ${planet}`);
        }
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        for (const planet of destroyedPlanets.sort()) {
            console.log(`-> ${planet}`);
        }
    }

    function decriptMessage(message) {
        let result = "";
        let pattern = /[star]/gi;
        let count = message.match(pattern) && message.match(pattern).length;
        for (const letter of message) {
            let code = letter.charCodeAt(0);
            result += String.fromCharCode(code - count);
        }
        return result;
    }
}
solve(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
solve(["3", "tt(''DGsvywgerx>6444444444%H%1B9444", "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR"]);
