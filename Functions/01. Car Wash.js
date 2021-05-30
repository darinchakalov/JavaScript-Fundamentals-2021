function carWash(arr) {
    var cleanPercetage = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'soap':
                cleanPercetage += 10;
                break;
            case 'water':
                cleanPercetage = cleanPercetage + (cleanPercetage / 5);
                break;
            case 'vacuum cleaner':
                cleanPercetage = cleanPercetage + (cleanPercetage / 4);
                break;
            case 'mud':
                cleanPercetage = cleanPercetage - (cleanPercetage / 10);
                break;
        }
        
    }
    let result = cleanPercetage.toFixed(2);
    console.log(`The car is ${result}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])