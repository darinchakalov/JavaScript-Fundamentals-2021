function solve(input) {
    let food = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let pigWegth = Number(input[3]) * 1000;
    let notEnougth = false;

    for (let day = 1; day <= 30; day++) {
        food -= 300;
        if (day % 2 === 0) {
            hay -= food * 0.05;
        }
        if (day % 3 === 0) {
            cover -= pigWegth / 3;
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            notEnougth = true;
            break;
        }
    }
    if (notEnougth) {
        console.log(`Merry must go to the pet store!`);
    } else {
        console.log(
            `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(
                2
            )}, Cover: ${(cover/1000).toFixed(2)}.`
        );
    }
}
solve([10, 5, 5.2, 1]);
