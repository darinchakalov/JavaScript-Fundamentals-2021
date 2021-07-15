function solve(input) {
    let website = {};
    let users = [];
    for (const line of input) {
        if (line.includes("user ")) {
            let userLine = line.split(" ");
            userLine.shift();
            let user = userLine[0];
            if (!users.includes(user)) {
                users.push(user);
            }
        } else if (line.includes("article ")) {
            let articleLine = line.split(" ");
            articleLine.shift();
            let article = articleLine[0];
            if (!website.hasOwnProperty(article)) {
                website[article] = {};
            }
        } else {
            let [userInfo, commentInfo] = line.split(": ");
            let userArr = userInfo.split(" ");
            userArr.splice(userArr.indexOf("posts"), 1);
            userArr.splice(userArr.indexOf("on"), 1);
            let [user, article] = [...userArr];
            if (users.includes(user) && website.hasOwnProperty(article)) {
                commentInfo = commentInfo.split(", ").join(" - ");
                website[article][user] = commentInfo;
            }
        }
    }
    for (const [article, info] of Object.entries(website).sort(
        (a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length
    )) {
        console.log(`Comments on ${article}`);
        for (const [user, comment] of Object.entries(info).sort((a, b) => sortingByUserName(a, b))) {
            console.log(`--- From user ${user}: ${comment}`);
        }
    }
    function sortingByUserName(a, b) {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else {
            return 0;
        }
    }
}
solve([
    "user aUser123",
    "someUser posts on someArticle: NoTitle, stupidComment",
    "article Books",
    "article Movies",
    "article Shopping",
    "user someUser",
    "user uSeR4",
    "user lastUser",
    "uSeR4 posts on Books: I like books, I do really like them",
    "uSeR4 posts on Movies: I also like movies, I really do",
    "someUser posts on Shopping: title, I go shopping every day",
    "someUser posts on Movies: Like, I also like movies very much",
]);
