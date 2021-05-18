function solve(distance, passengers, price) {
    let litres = (distance / 100) * 7;
    litres += passengers * 0.1;
    let neededMoney = litres * price
    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}
solve(260,9,2.49)