function solve(input) {
    let string = input[0];
    let pattern = /([@#])[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g;
    let valid = 0
    let result = []
    if (string.match(pattern)) {
        let words = string.match(pattern)
        for (const couple of words) {
            let couples = couple.match(/\w+/g)
            let first = couples[0]
            let second = couples[1]
            if (first.length === second.length && first === second.split('').reverse().join('')) {
                result.push(`${first} <=> ${second}`)
            }
        }
        console.log(`${words.length} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }

    if (result.length > 0) {
        console.log(`The mirror words are:`);
        console.log(result.join(', '));
    } else {
        console.log(`No mirror words!`);
    }
}
/*solve([
    "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);*/

solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@ #po0l##l0op#'])