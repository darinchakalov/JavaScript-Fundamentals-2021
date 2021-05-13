function solve(base, increment) {
    let steps = 1
    let gold = 0
    let stone = 0
    let marble = 0
    let lapis = 0
    while (true) {
        if (base >= 3) {
            let main = (base - 2) * (base - 2)
            stone += main;
            let outside = (base * base) - main;
            if (steps % 5 == 0) {
                lapis += outside
            } else {
                marble += outside;
            }
        } else {
            gold = base * base
        }
        base -= 2
        if (base < 1) {
            break;
        }
        steps++
    }

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}
solve(1, 1)