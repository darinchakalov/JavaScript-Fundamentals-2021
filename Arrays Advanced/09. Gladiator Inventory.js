function solve(input) {
    let equipment = input.shift().split(' ')

    while (input.length !== 0) {
        let current = input.shift().split(' ');
        let command = current.shift();

        switch (command) {
            case 'Buy':
                buy(current);
                break;
            case 'Trash':
                trash(current);
                break;
            case 'Repair':
                repair(current);
                break;
            case 'Upgrade':
                upgrade(current);
                break;
        }
    }
    function buy(current) {
        let item = current.shift();
        if (!equipment.includes(item)) {
            equipment.push(item);
        };
    }
    function trash(current) {
        let item = current.shift();
        if (equipment.includes(item)) {
            let index = equipment.indexOf(item);
            equipment.splice(index, 1);
        };
    }
    function repair(current) {
        let item = current.shift();
        if (equipment.includes(item)) {
            let index = equipment.indexOf(item);
            equipment.splice(index, 1);
            equipment.push(item);
        };
    }
    function upgrade(current) {
        let itemUpgrade = current.shift().split('-');
        let item = itemUpgrade[0];
        let upgrade = itemUpgrade[1]
        if (equipment.includes(item)) {
            let index = equipment.indexOf(item);
            equipment.splice(index+1, 0, item+':'+upgrade);
        };
    }
    console.log(equipment.join(' '));
}
solve(['SWORD Shield Spear',
    'Buy Bag', 'Trash Shield',
    'Repair Spear', 'Upgrade SWORD-Steel'])