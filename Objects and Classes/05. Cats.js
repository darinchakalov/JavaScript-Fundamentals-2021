function cats(arr) {
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.speak = () => {
                return `${name}, age ${age} says Meow`;
            }
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        let currentCat = arr[i].split(' ');
        let cat = new Cat(...currentCat)
        console.log(cat.speak());
    }
}
cats(['Mellow 2', 'Tom 5'])