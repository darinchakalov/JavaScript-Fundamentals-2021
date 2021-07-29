function solve(input) {
    let pattern = /[A-z0-9][A-z0-9.-_]+@[A-z.]+.[A-z]/g
    while ((validEmails = pattern.exec(input)) !== null) {
        console.log(validEmails[0]);
    }
}
solve('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')