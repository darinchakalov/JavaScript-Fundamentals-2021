function solve(input) {
    let catalogue = {};
    for (const line of input) {
        let [company, id] = line.split(" -> ");
        if (!catalogue.hasOwnProperty(company)) {
            catalogue[company] = [];
            catalogue[company].push(id);
        } else {
            if (!catalogue[company].includes(id)) {
                catalogue[company].push(id);
            }
        }
    }
    for (const [company, id] of Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`${company}\n${printing(id)}`);
    }
    function printing(id) {
        let result = "";
        for (let i = 0; i < id.length; i++) {
            if (i !== id.length - 1) {
                result += `-- ${id[i]}\n`;
            } else {
                result += `-- ${id[i]}`;
            }
        }
        return result;
    }
}
solve(["SoftUni -> AA12345", "SoftUni -> BB12345", "Microsoft -> CC12345", "HP -> BB12345"]);
