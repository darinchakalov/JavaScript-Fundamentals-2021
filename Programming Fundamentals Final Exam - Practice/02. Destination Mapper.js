function solve(input) {
    let result = [];
    let points = 0;
    let rgx = /([=/])[A-Z][A-Za-z]{2,}\1/g;
    if (input.match(rgx)!== null) {
        let matched = input.match(rgx);
        
        for (let dest of matched) {
            dest = dest.substring(1, dest.length - 1);
            if (dest.length >= 3) {
                result.push(dest);
            }
        }
        
        for (let dest of result) {
            points += dest.length;
        }
    }
    console.log(`Destinations: ${result.join(", ")}`);
    console.log(`Travel Points: ${points}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");
