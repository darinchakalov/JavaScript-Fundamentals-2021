function solve(array, numsToWorkWith) {
    let [take, del, search] = numsToWorkWith;

    let res = array.splice(0, take);
    res.splice(0,del);
    let count = 0;
    res.forEach(element => {
        if (element === search) {
            count++
        }
    });
    console.log(`Number ${search} occurs ${count} times.`);
}
solve([5,2,3,4,1,6], [5,2,3])