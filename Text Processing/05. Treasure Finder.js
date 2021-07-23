function solve(input) {
    let key = input.shift().split(' ');
    let line = input.shift();
    let index = 0;
    while (line !== 'find') {
        let messege = []
        for (const symbol of line) {
            let num = symbol.charCodeAt(0) - Number(key[index])
            messege.push(String.fromCharCode(num))
            index++
            if (index > key.length -1) {
                index = 0
            }
        }
        messege = messege.join('');
        let start1 = messege.indexOf('&');
        let end1 = messege.lastIndexOf('&');
        let start2 = messege.indexOf('<');
        let end2 = messege.indexOf('>');
        console.log(`Found ${messege.substring(start1+1, end1)} at ${messege.substring(start2+1, end2)}`);
        index = 0;
        line = input.shift();
    }
}
solve(["1 2 1 3", "ikegfp'jpne)bv=41P83X@", "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find"]);
