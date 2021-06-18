function solve(arr1, arr2) {
    let stock = {}
    for (let i = 0; i < arr1.length; i+=2) {
        stock[arr1[i]] = Number(arr1[i+1])
    }
    for (let i = 0; i < arr2.length; i+=2) {
        if (arr2[i] in stock) {
            stock[arr2[i]] += Number(arr2[i+1]);
        } else {
            stock[arr2[i]] = Number(arr2[i+1])
        }
    }
    let provisions = Object.entries(stock);
    for (const [key, value] of provisions) {
        console.log(`${key} -> ${value}`);
    }
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
