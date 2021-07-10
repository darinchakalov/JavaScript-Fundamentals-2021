function solve(input) {
    let list = []
    let guests =[]
    let line = input.shift();
    while (line !== 'PARTY') {
        list.push(line)
        line = input.shift();
    }
    
    for (let i = 0; i < input.length; i++) {
        if (list.includes(input[i])) {
            guests.push(input[i])
            let index = list.indexOf(input[i])
            list.splice(index, 1)
        }
    }
    list = list.sort((a,b) => a.localeCompare(b))
    console.log(list.length);
    for (const member of list) {
        console.log(member);
    }
}
solve(["7IK9Yo0h", "9NoBUajQ", "Ce8vwPmE", "SVQXQCbc", "tSzE5t0p", "PARTY", "9NoBUajQ", "Ce8vwPmE", "SVQXQCbc"]);
