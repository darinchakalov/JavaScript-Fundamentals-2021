function solve(input) {
    let days = Number(input[0]);
    let dailyAmount = Number(input[1]);
    let totalNeeded = Number(input[2]);
    let totalGathered = 0;
    for (let i = 1; i <= days; i++) {
        totalGathered += dailyAmount;
        if (i % 3 === 0) {
            totalGathered += dailyAmount * 0.5;
        } 
        if (i % 5 === 0) {
            totalGathered = totalGathered - (totalGathered * 0.3);
        }
    }
    if (totalGathered >= totalNeeded) {
        console.log(`Ahoy! ${totalGathered.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (totalGathered / totalNeeded) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
solve([5, 40, 100]);
