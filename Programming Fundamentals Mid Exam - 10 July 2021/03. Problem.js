function solve(input) {
    let arr = input.shift().split(", ");
    let line = input.shift();
    while (line !== "End") {
        let [command, phone] = line.split(" - ");
        switch (command) {
            case "Add":
                if (!arr.includes(phone)) {
                    arr.push(phone);
                }
                break;
            case "Remove":
                if (arr.includes(phone)) {
                    let index = arr.indexOf(phone);
                    arr.splice(index, 1);
                }
                break;
            case "Bonus phone":
                let [oldPhone, newPhone] = phone.split(":");
                if (arr.includes(oldPhone)) {
                    let index = arr.indexOf(oldPhone);
                    arr.splice(index + 1, 0, newPhone);
                }
                break;
            case "Last":
                if (arr.includes(phone)) {
                    let index = arr.indexOf(phone);
                    let removed = arr.splice(index, 1);
                    arr.push(removed[0]);
                }
                break;
        }
        line = input.shift();
    }
    console.log(arr.join(", "));
}
//solve(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]);
solve(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "Last - HuaweiP10", "End"]);
