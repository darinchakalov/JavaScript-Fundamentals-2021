function solve(input) {
    let storage = new Map()

    for (const line of input) {
        let [obj, amount] = line.split(' ')
        amount = Number(amount)
        if (!storage.has(obj)) {
            storage.set(obj, amount)
        } else {
            let currentQuantity = storage.get(obj)
            let newQuantity = currentQuantity += amount
            storage.set(obj, newQuantity)
        }
    }
    for (const [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }
}
solve(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])