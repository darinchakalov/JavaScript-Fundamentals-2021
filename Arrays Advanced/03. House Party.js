function solve(arr) {
    let guestList = [];
    for (let i = 0; i < arr.length; i++) {
        let [guest, some, action] = arr[i].split(' ')
        checkList(guest, action);
    }

    function checkList(guest, action) {
        if (guestList.includes(guest)){
            if (action === 'not') {
                let postion = guestList.indexOf(guest);
                guestList.splice(postion, 1);
            } else {
                console.log(`${guest} is already in the list!`);
            }
        } else {
            if (action === 'not') {
                console.log(`${guest} is not in the list!`);
            } else {
                guestList.push(guest);
            }
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (guestList[j] !== undefined) {
            console.log(guestList[j]);
        }
        
    }
}
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])