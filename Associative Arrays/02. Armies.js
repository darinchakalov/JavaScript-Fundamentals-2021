function solve(input) {
    let armies = {};
    for (const line of input) {
        if (line.includes('arrives')) {
            let commanderLine = line.split(' ')
            commanderLine.pop()
            let commanderName = commanderLine.join(' ')
            if (!armies.hasOwnProperty(commanderName)) {
                armies[commanderName] = {};
            }
        } else if(line.includes(' + ')){
            let [army, count] = line.split(' + ')
            for (const commander of Object.keys(armies)) {
                if (armies[commander].hasOwnProperty(army)) {
                    armies[commander][army] += Number(count);
                }
            }
        } else if(line.includes('defeated')){
            let commanderLine = line.split(' ')
            commanderLine.pop()
            let commanderName = commanderLine.join(' ')
            if (armies.hasOwnProperty(commanderName)) {
                delete armies[commanderName]
            }
        } 
        else {
            let [commander, armiInfo] = line.split(': ')
            let [armyName, count] = armiInfo.split(', ')
            if (armies.hasOwnProperty(commander)) {
                armies[commander][armyName] = Number(count);
            }
        }
    }
    for (const [key, value] of Object.entries(armies).sort((a,b) => countAllArmies(b[1]) - countAllArmies(a[1]))) {
        console.log(`${key}: ${countAllArmies(value)}`)
        for (const [army, count] of Object.entries(value).sort((a,b) => b[1] - a[1])) {
            console.log(`>>> ${army} - ${count}`);
        }
    }
    function subObjPrint(obj) {
        let result = ""
        for (const [key, value] of Object.entries(obj)) {
            result += `${key}: ${value}`
        }
        return result;
    }
    function countAllArmies(name) {
        let overall = 0;
        for (const skill of Object.values(name)) {
            overall += Number(skill);
        }
        return overall;
    }
}
solve([
    "Rick Burr arrives",
    "Fergus: Wexamp, 30245",
    "Rick Burr: Juard, 50000",
    "Findlay arrives",
    "Findlay: Britox, 34540",
    "Wexamp + 6000",
    "Juard + 1350",
    "Britox + 4500",
    "Porter arrives",
    "Porter: Legion, 55000",
    "Legion + 302",
    "Rick Burr defeated",
    "Porter: Retix, 3205",
]);
