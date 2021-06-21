function solve(arr) {
    class Product{
        constructor(name, price){
            this.name = name;
            this.price = price;
        }
    }

    let catalog = []
    for (let i = 0; i < arr.length; i++) {
        let currentProduct = new Product(...(arr[i].split(' : ')))
        catalog.push(currentProduct)
    }
    catalog.sort((a,b) => a.name.localeCompare(b.name))
    let printLetter = ""
    for (let i = 0; i < catalog.length; i++) {
        let currentLetter = catalog[i].name[0] 
        if (currentLetter !== printLetter) {
            console.log(currentLetter);
            printLetter = currentLetter
        }
        console.log(`  ${catalog[i].name}: ${catalog[i].price}`);
        
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])