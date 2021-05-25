function solve(input) {
    let rooms = input[0].split('|')
    let health = 100;
    let coins = 0;
    let died = false;
    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i].split(' ');
        let type = currentRoom[0];
        let amount = Number(currentRoom[1]);
        if (type === 'potion') {
            let diff = 100 - health;
            health += amount;
            if (health > 100) {
                health = 100;
                console.log(`You healed for ${diff} hp.`);
            } else {
                console.log(`You healed for ${amount} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (currentRoom[0] === 'chest') {
            coins += amount;
            console.log(`You found ${amount} coins.`);
        } else {
            health -= amount;
            if (health <= 0) {
                console.log(`You died! Killed by ${type}.`);
                console.log(`Best room: ${i + 1}`);
                died = true;
                break;
            } else {
                console.log(`You slayed ${type}.`);
            }
        }
        if (died) {
            break;
        }
    }
    if (!died) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
//solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])
solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])