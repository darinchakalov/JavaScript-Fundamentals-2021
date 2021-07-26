function solve(input) {
    let line = input.shift();
    let total = 0
    let pattern = /(?<name>%[A-Z][a-z]+%)[^\|\%\$.]*?(?<product><\w+>)[^\|\%\$.]*?(?<count>\|\d+\|)[^$%.|]*?(?<price>\d+(.\d+)?\$)/g;
    while (line !== 'end of shift') {
        if (line.match(pattern)) {
            let matchedLine = pattern.exec(line)
            let name = matchedLine.groups['name']
            let product = matchedLine.groups['product']
            let count = matchedLine.groups['count']
            let price = matchedLine.groups['price']
            count = Number(count.substring(1, count.length-1))
            price = Number(price.substring(0, price.length-1))
            total += price*count;
            console.log(`${name.substring(1,name.length-1)}: ${product.substring(1, product.length-1)} - ${(count*price).toFixed(2)}`);
        }
        line = input.shift();
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
solve(["%George%<Croissant>|2|10.3$", "%Peter%<Gum>|1|1.3$", 
"%Maria%<Cola>|1|2.4$", "end of shift"]);
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])