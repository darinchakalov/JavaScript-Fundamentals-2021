function solve(input) {
    let bitcoinPrice = 11949.16
    let gold = 67.51
    let totalMoney = 0
    let bitcoins = 0;
    let dayFirstBought = 0
    let found = false;
    let days = 0;
    for (let i = 0; i < input.length; i++) {
        days++
        if (days % 3 === 0) {
            let goldToday = input[i] - (input[i] * 0.30)
            totalMoney += (goldToday * gold)
        } else {
            totalMoney += (input[i] * gold)
        }
        totalMoney = Number(totalMoney.toFixed(2))
        if (totalMoney >= bitcoinPrice) {
            bitcoins += (Math.floor(totalMoney / bitcoinPrice))
            totalMoney = totalMoney % bitcoinPrice;
            if (bitcoins >= 1 && !found) {
                found = true;
                dayFirstBought = days;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (dayFirstBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBought}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124])