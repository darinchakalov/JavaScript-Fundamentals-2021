function solve(input) {
    //let pattern = /(@#+)[A-Z][A-Za-z0-9]{4,}[A-Z]\1/;
    //let pattern = /(@#+)(?=[A-Z])([A-Za-z0-9]{6,})(?<=[A-Z])\1/;
    let pattern = /@#+(?=[A-Z])([A-Za-z0-9]{6,})(?<=[A-Z])@#+/;
    let n = Number(input.shift());
    let result = [];
    for (let i = 0; i < n; i++) {
        let current = input[i];
        let result = [];
        if (current.match(pattern)) {
            let rgx = /\d+/g;
            if (current.match(rgx)) {
                let match = rgx.exec(current);
                while (match) {
                    result.push(match[0]);
                    match = rgx.exec(current);
                }
                let group = "";
                for (const num of result) {
                    group += num;
                }
                console.log(`Product group: ${group}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
