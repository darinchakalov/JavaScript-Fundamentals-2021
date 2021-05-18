function solve(num) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                 console.log(alphabet[i]+ alphabet[j] + alphabet[k]);
            }
        }
    }
}
solve(4)