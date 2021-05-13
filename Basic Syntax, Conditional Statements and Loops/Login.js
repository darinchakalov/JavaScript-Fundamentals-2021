function solve(input) {
    let user = input.shift()
    let tries = 0;
    let correct = false
    let correctLetters = 0;
    let incorrectTries = false
    let current = 0;
    while (true) {
        let pass = input.shift()
        for (let i = pass.length - 1; i => 0; i--) {
            let letter = pass[i]
            if (letter === user[current]) {
                correctLetters++
            }
            if (correctLetters == user.length) {
                correct = true;
            }
            current++
            if (current > user.length - 1) {
                break;
            }
        }
        if (correct) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
            current = 0
            tries++
            if (tries >= 3) {
                incorrectTries = true
                break;
            }
        }
    }
    if (incorrectTries) {
        console.log(`User ${user} blocked!`);
    }
}
//solve(['Acer', 'login', 'go', 'let me in', 'recA'])
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])