function perfectNumber(number) {
    let result = [];
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    let sum = 0
    for (let j = 0; j < result.length; j++) {
        sum += result[j];
    }
    if (sum === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }

}
perfectNumber(28)