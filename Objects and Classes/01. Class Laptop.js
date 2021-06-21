function solve() {
    class Laptop {
        constructor(info, quality) {
            this.info = info;
            this.quality = quality;
        }
        isOn = false;
        turnOn() {
            this.quality --;
            return (this.isOn = true);
        }
        turnOff() {
            this.quality --;
            return (this.isOn = false);
        }
        showInfo() {
            return JSON.stringify(info);
        }
        get price() {
            return (800 - (this.info.age * 2) + (this.quality * 0.5));
        }
    }

    let info = { producer: "Dell", age: 2, brand: "XPS" };
    let laptop = new Laptop(info, 10);
    laptop.turnOn();
    console.log(laptop.showInfo());
    laptop.turnOff();
    console.log(laptop.quality);
    laptop.turnOn();
    console.log(laptop.isOn);
    console.log(laptop.price);
    console.log(laptop.info.age);
}
solve();
