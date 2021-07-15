function solve(input) {
    let courses = {};
    for (const line of input) {
        if (line.includes(": ")) {
            let [course, capacity] = line.split(": ");
            if (!courses.hasOwnProperty(course)) {
                courses[course] = {}
                courses[course]["capacity"] = Number(capacity);
            } else {
                courses[course]["capacity"] += Number(capacity);
            }
        } else {
            let lineArr = line.split(" ");
            lineArr.splice(lineArr.indexOf("with"), 1);
            lineArr.splice(lineArr.indexOf("email"), 1);
            lineArr.splice(lineArr.indexOf("joins"), 1);
            let [userInfo, email, course] = [...lineArr];
            let [user, credit] = userInfo.split("[");
            let credits = credit.substring(0, credit.length - 1);
            if (courses.hasOwnProperty(course)) {
                if (!courses[course].hasOwnProperty(credits)) {
                    if (courses[course]["capacity"] > 0) {
                        courses[course][credits] = {};
                        courses[course][credits][user] = email;
                        courses[course]["capacity"] -= 1;
                    }
                }
            }
        }
    }
    for (const [course,info] of Object.entries(courses).sort((a,b) => Object.keys(b[1]).length - Object.keys(a[1]).length)) {
        console.log(`${course}: ${courses[course]['capacity']} places left`);
        delete courses[course]['capacity']
        for (const [k,v] of Object.entries(info).sort((a,b) => b[0] - a[0])) {
            console.log(`--- ${k}: ${Object.keys(v)}, ${Object.values(v)}`);
        }
    }
}
solve([
    "JavaBasics: 2",
    "user1[25] with email user1@user.com joins C#Basics",
    "C#Advanced: 3",
    "JSCore: 4",
    "user2[30] with email user2@user.com joins C#Basics",
    "user13[50] with email user13@user.com joins JSCore",
    "user1[25] with email user1@user.com joins JSCore",
    "user8[18] with email user8@user.com joins C#Advanced",
    "user6[85] with email user6@user.com joins JSCore",
    "JSCore: 2",
    "user11[3] with email user11@user.com joins JavaBasics",
    "user45[105] with email user45@user.com joins JSCore",
    "user007[20] with email user007@user.com joins JSCore",
    "user700[29] with email user700@user.com joins JSCore",
    "user900[88] with email user900@user.com joins JSCore",
]);
