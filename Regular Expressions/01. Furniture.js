function solve(input) {
    let total = 0;
    let furnature = []
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;
    while ((matchedLines = pattern.exec(input)) !== null) {
        let name = matchedLines.groups["name"];
        let price = Number(matchedLines.groups["price"]);
        let quantity = Number(matchedLines.groups["quantity"]);
        total += price*quantity;
        furnature.push(name)
    }
    console.log(`Bought furniture:`);
    if (furnature.length > 0) {
        console.log(furnature.join('\n'));
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}
solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
