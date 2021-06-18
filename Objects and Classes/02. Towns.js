function solve(arr) {
  class Person {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = latitude;
      this.longtitude = longitude;
      console.log(
        `{ town: '${name}', latitude: '${Number(latitude).toFixed(2)}', longitude: '${Number(longitude).toFixed(2)}' }`
      );
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let currentPerson = arr[i].split(" | ");
    let person = new Person(...currentPerson);
  }
}
solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
