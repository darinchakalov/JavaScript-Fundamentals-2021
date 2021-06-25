function solve(input) {
    class Student {
        constructor(bonus, attended) {
            this.bonus = bonus;
            this.attended = attended;
        }
    }

    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = [];
    for (let i = 0; i < studentsCount; i++) {
        let attended = Number(input.shift());
        let bonus = ((attended / lecturesCount) * (5 + initialBonus));
        let student = new Student(bonus, attended);
        students.push(student);
    }
    students = students.sort((a, b) => b.bonus - a.bonus);
    console.log(`Max Bonus: ${Math.ceil(students[0].bonus)}.`);
    console.log(`The student has attended ${students[0].attended} lectures.`);
}
//solve(["5", "25", "30", "12", "19", "24", "16", "20"]);
solve(["10", "30", "14", "8", "23", "27", "28", "15", "17", "25", "26", "5", "18"]);
