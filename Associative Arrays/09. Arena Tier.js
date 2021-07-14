function solve(input) {
    let arenaTier = {};
    let line = input.shift();
    while (line !== "Ave Cesar") {
        if (line.includes("->")) {
            let [name, technique, skill] = line.split(" -> ");
            if (!arenaTier.hasOwnProperty(name)) {
                arenaTier[name] = {};
                arenaTier[name][technique] = skill;
            } else {
                if (!arenaTier[name].hasOwnProperty(technique)) {
                    arenaTier[name][technique] = skill;
                } else {
                    if (arenaTier[name][technique] < skill) {
                        arenaTier[name][technique] = skill;
                    }
                }
            }
        } else {
            let [name1, name2] = line.split(" vs ");
            if (arenaTier.hasOwnProperty(name1) && arenaTier.hasOwnProperty(name2)) {
                if (findCommonTechnuques(name1, name2)) {
                    let commonTechnique = findTheCommonTech(name1, name2);
                    if (arenaTier[name1][commonTechnique] > arenaTier[name2][commonTechnique]) {
                        delete arenaTier[name2];
                    } else {
                        delete arenaTier[name1];
                    }
                }
            }
        }
        line = input.shift();
    }
    for (const [key, value] of Object.entries(arenaTier).sort((a, b) => sortBySkill(b[1]) - sortBySkill(a[1]))) {
        console.log(`${key}: ${sortBySkill(value)} skill\n${printObject(value)}`);
    }
    function printObject(obj) {
        let techniques = "";
        let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < sorted.length; i++) {
            if (i !== sorted.length - 1) {
                techniques += `- ${sorted[i][0]} <!> ${sorted[i][1]}\n`;
            } else {
                techniques += `- ${sorted[i][0]} <!> ${sorted[i][1]}`;
            }
        }
        return techniques;
    }
    function sortBySkill(name) {
        let overall = 0;
        for (const skill of Object.values(name)) {
            overall += Number(skill);
        }
        return overall;
    }
    function findCommonTechnuques(name1, name2) {
        let obj1 = arenaTier[name1];
        let obj2 = arenaTier[name2];
        let common = false;
        for (const tech1 of Object.keys(obj1)) {
            for (const tech2 of Object.keys(obj2)) {
                if (tech1 == tech2) {
                    common = true;
                }
            }
        }
        return common;
    }
    function findTheCommonTech(name1, name2) {
        let obj1 = arenaTier[name1];
        let obj2 = arenaTier[name2];
        let common;
        for (const tech1 of Object.keys(obj1)) {
            for (const tech2 of Object.keys(obj2)) {
                if (tech1 == tech2) {
                    common = tech1;
                }
            }
        }
        return common;
    }
}
/*solve([
    "Peter -> BattleCry -> 400",
    "Alex -> PowerPunch -> 300",
    "Stefan -> Duck -> 200",
    "Stefan -> Tiger -> 250",
    "Ave Cesar",
]);*/
console.log();
solve([
    "Pesho -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Peter vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Maximilian",
    "Ave Cesar",
]);
