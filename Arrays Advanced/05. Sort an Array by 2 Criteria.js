function solve(arr) {
    arr.sort(sorting);
    arr.forEach(el => console.log(el));

    function sorting(current, next){
        if (current.length === next.length){
            return current.localeCompare(next);
        }
        return current.length - next.length;
    }
}
//solve(['alpha', 'beta','gamma','cama','blama'])
solve(['Issac', 'Theodor','Jack','Harrison','George'])