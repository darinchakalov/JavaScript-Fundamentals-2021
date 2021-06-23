function solve(input) {
    let register = {};
    let students = [];
    for (let line of input) {
        let currentStudent = line.split(", ");
        let [name, grade, avarageGrade] = [
            currentStudent[0].split(" ")[2],
            currentStudent[1].split(" ")[1],
            currentStudent[2].split(" ")[5],
        ];
        if (avarageGrade >= 3) {
            grade = Number(grade) + 1;
            if (!register.hasOwnProperty(grade)) {
                register[grade] = [];
                register[grade]["avGrade"] = [];
            }
            register[grade].push(name);
            register[grade]["avGrade"].push(avarageGrade);
        }
    }
    let sortedKeys = Object.keys(register).sort((a, b) => a - b);
    sortedKeys.forEach((key) => {
        console.log(`${key} Grade `);
        console.log(`List of students: ${register[key].join(", ")}`);
        let del = register[key]["avGrade"].length;
        let sum = 0
        register[key]["avGrade"].forEach(studentGrade => {
            sum += Number(studentGrade)
        });
        console.log(`Average annual grade from last year: ${(sum / del).toFixed(2)}`);
        console.log('');
    });
}
solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
