function solve(arr) {
    class System {
        constructor(systemName, componentName, subcomponentName) {
            this.systemName = systemName;
            this.componentName = componentName;
            this.subcomponentName = subcomponentName;
        }
        componentsCount = 0;
    }
    let list = [];
    arr.forEach((element) => {
        let [systemName, componentName, subcomponentName] = element.split(" | ");
        let el = new System(systemName, componentName, subcomponentName);
        list.push(el);
    });
    let count = {}
    list.forEach(function(item) {
        count[item.componentName] ? count[item.componentName]++ : count[item.componentName] = 1
    });
    console.log(count);
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
