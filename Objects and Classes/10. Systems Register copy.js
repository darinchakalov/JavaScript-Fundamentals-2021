function solve(arr) {

    let list = [];
    let firstLine = arr[0].split(' | ')
    let currentSystem = firstLine[0]
    console.log(currentSystem);
    for (let i = 0; i < arr.length; i++) {
        let obj = {}
        let line = arr[i].split(' | ')
        if (currentSystem !== list[0].systemName) {
            obj.systemName = line[0]
            currentSystem = line[0]
        }
        list.push(obj)
        
   }
   list.forEach(element => {
       console.log(element.systemName);
   });
}
solve([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security",
]);
