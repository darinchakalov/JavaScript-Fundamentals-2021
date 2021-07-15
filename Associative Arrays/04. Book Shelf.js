function solve(input) {
    let library = {};
    for (const line of input) {
        if (line.includes(' -> ')) {
            let [id, gender] = line.split(' -> ')
            if (!library.hasOwnProperty(id)) {
                library[id] = {}
                library[id][gender] = {}
            } /*else {
                if (!library[id].hasOwnProperty(gender)) {
                    library[id][gender] = {}
                }
            }*/
        } else {
            let [title, info] = line.split(': ')
            let [author, gender] = info.split(', ')
            for (const id of Object.keys(library)) {
                if (library[id].hasOwnProperty(gender)) {
                    library[id][gender][title] = author
                }
            }
        }
    }
    for (const [id, gender] of Object.entries(library).sort((a,b) => sortByCountOfBooks(b[1]) - sortByCountOfBooks(a[1]))) {
        console.log(`${id} ${Object.keys(gender)}: ${sortByCountOfBooks(gender)}`);
        for (const [k, v] of Object.entries(gender)) {
            for (const [title, author] of Object.entries(v).sort((a,b) => a[0].localeCompare(b[0]))) {
                console.log(`--> ${title}: ${author}`);
            }
        }
    }

    function sortByCountOfBooks(shelf) {
        let count = 0
        for (const [k,v] of Object.entries(shelf)) {
            count = Object.keys(v).length
        }
        return count;
    }
}
solve([
    "1 -> history",
    "1 -> action",
    "Death in Time: Criss Bell, mystery",
    "2 -> mystery",
    "3 -> sci-fi",
    "Child of Silver: Bruce Rich, mystery",
    "Hurting Secrets: Dustin Bolt, action",
    "Future of Dawn: Aiden Rose, sci-fi",
    "Lions and Rats: Gabe Roads, history",
    "2 -> romance",
    "Effect of the Void: Shay B, romance",
    "Losing Dreams: Gail Starr, sci-fi",
    "Name of Earth: Jo Bell, sci-fi",
    "Pilots of Stone: Brook Jay, history",
]);
