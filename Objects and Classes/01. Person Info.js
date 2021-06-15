function personInfo(firstName, lastName, age) {
    let person = {}
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person
}
console.log(personInfo('darin', 'chakalov', 32))