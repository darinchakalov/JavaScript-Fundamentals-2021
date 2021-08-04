function solve(input) {
    let totalCalories = 0;
    let result = []
    let rgx = /([#|])(?<name>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let match = rgx.exec(input[0])
        while (match) {
           result.push({name: match[2], expiration: match[3], calories: match[4]})
           totalCalories += Number(match[4]) 
           match = rgx.exec(input[0])
        }
        console.log(`You have food to last you for: ${Math.floor(totalCalories/2000)} days!`);
        for (const match of result) {
            console.log(`Item: ${match.name}, Best before: ${match.expiration}, Nutrition: ${match.calories}`);

        }
}
solve(["#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|"]);
