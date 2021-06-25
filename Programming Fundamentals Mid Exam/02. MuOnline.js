function solve(input) {
    let rooms = input.split("|");
    let health = 100;
    let bitcoin = 0;
    let died = false;
    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i].split(" ");
        let [obj, num] = [...currentRoom];
        switch (obj) {
            case "potion":
                let diff = 100 - health
                if (diff > num) {
                    console.log(`You healed for ${Number(num)} hp.`);
                    health += Number(num)
                }else {
                    console.log(`You healed for ${diff} hp.`);
                    health= 100;
                }
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                console.log(`You found ${num} bitcoins.`);
                bitcoin += Number(num);
                break;
            default:
                if (health > Number(num)) {
                    console.log(`You slayed ${obj}.`);
                    health -= Number(num)
                } else{
                    console.log(`You died! Killed by ${obj}.`);
                    console.log(`Best room: ${i+1}`);
                    died = true
                }
                break;
        }
        if (died) {
            break;
        }
    }
    if (!died) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoin}`);
        console.log(`Health: ${health}`);
    }
}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");