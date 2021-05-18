function solve(lostCount, helmet, sword, shield, armor) {
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;
    for (fight = 1; fight <=lostCount; fight ++){
        let brokenHelm = false;
        let brokenSwo = false
        if (fight % 2 === 0) {
            brokenHelmet++
            brokenHelm = true;
        }
        if (fight % 3 === 0) {
            brokenSword++
            brokenSwo = true
        }
        if (brokenHelm && brokenSwo) {
            brokenShield++
            if (brokenShield % 2 === 0) {
                brokenArmor++
            }
        }
        
    }
    let sum = (brokenHelmet * helmet) + (brokenSword * sword) + (brokenShield * shield) + (brokenArmor * armor);
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
//solve(7, 2, 3, 4, 5)
solve(23,12.50,21.50,40,200)