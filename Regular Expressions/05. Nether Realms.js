function solve([input]) {
    let names = input.split(/[, ]+/g);
    let result = {};
    let healthRegex = /[^\d\+\-\/\*\.]/g;
    let damageRegex = /[-+]?\d+(.\d+)?[*]*?/g;
    for (const demon of names) {
        if (demon.match(/[^ ,]/g)) {
            let health = 0;
            let healthArr = demon.match(healthRegex);
            for (const char of healthArr) {
                health += char.charCodeAt(0);
            }
            let damageArr = demon.match(damageRegex);
            let damage = 0;
            if (damageArr !== null) {
                for (const num of damageArr) {
                    damage += Number(num);
                }
            }
            let calcArr = demon.match(/[*\/]/g);
            if (calcArr !== null) {
                for (const symbol of calcArr) {
                    if (symbol === "*") {
                        damage *= 2;
                    } else {
                        damage /= 2;
                    }
                }
            }
            result[demon] = {};
            result[demon]["health"] = health;
            result[demon]["damage"] = damage.toFixed(2);
        }
    }
    for (const [key, value] of Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`${key} - ${value["health"]} health, ${value["damage"]} damage`);
    }
}
solve(["M3ph-0.5s-0.5t0.0**"]);
solve(["M3ph1st0**, Az12.5*azel"]);
solve(["Gos/ho,   dar1n, test"]);
