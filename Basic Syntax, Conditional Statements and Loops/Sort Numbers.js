function solve(x1, x2, x3) {
    if (x1 > x2 && x1 > x3) {
        if (x2 > x3) {
            console.log(x1);
            console.log(x2);
            console.log(x3);
        } else {
            console.log(x1);
            console.log(x3);
            console.log(x2);
        }
    } else if (x2 > x3 && x2 > x1) {
        if (x1 > x3) {
            console.log(x2);
            console.log(x1);
            console.log(x3);
        } else {
            console.log(x2);
            console.log(x3);
            console.log(x1);
        }
    } else {
        if (x1 > x2) {
            console.log(x3);
            console.log(x1);
            console.log(x2);
        } else {
            console.log(x3);
            console.log(x2);
            console.log(x1);
        }
    } 
}
solve(2, 1, 3)