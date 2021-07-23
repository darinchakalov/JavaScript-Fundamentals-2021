function solve(input) {
    let line = input.shift();
    let word = [];
    while (line !== "end") {
        let [letter, indexes] = line.split(":");
        let indArr = indexes.split("/");
        for (const index of indArr) {
            word[index] = letter;
        }
        line = input.shift();
    }
    console.log(word.join(""));
}
solve(["a:0/3/5/11", "v:1/4", "j:2", "m:6/9/15", "s:7/13", "d:8/14", "c:10", "l:12", "end"]);
