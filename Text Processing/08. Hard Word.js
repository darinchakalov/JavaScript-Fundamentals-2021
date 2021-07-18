function solve(input) {
    let text = input[0]
    let textArr = input[0].split(' ')
    console.log(textArr);
    let wordsArr = input[1]
    for (const w of textArr) {
        for (const wo of wordsArr) {
            if (w === '_'.repeat(wo.length)) {
                text = text.replace(w, wo)
            }
        }
    }
    console.log(text);
}
solve([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
