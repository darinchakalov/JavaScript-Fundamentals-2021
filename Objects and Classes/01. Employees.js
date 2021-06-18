function solve(arr) {
    class PersonalNumber {
        constructor(name,number){
            this.name = name;
            this.number = number
            console.log(`Name: ${name} -- Personal Number: ${number}`);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i].length
        let name = arr[i]
        let employee = new PersonalNumber(name, num)
        
    }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
