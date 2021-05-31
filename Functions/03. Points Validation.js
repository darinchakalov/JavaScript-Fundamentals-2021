function pointsValidation(arr) {
    let pointAx = arr[0];
    let pointAy = arr[1];
    let pointBx = arr[2];
    let pointBy = arr[3];

    if (checkDistance(pointAx,pointAy,0,0)) {
        console.log(`{${pointAx}, ${pointAy}} to {0, 0} is valid`);
    } else {
        console.log(`{${pointAx}, ${pointAy}} to {0, 0} is invalid`);
    }
    if (checkDistance(pointBx,pointBy,0,0)) {
        console.log(`{${pointBx}, ${pointBy}} to {0, 0} is valid`);
    } else {
        console.log(`{${pointBx}, ${pointBy}} to {0, 0} is invalid`);
    }
    if (checkDistance(pointAx,pointAy,pointBx,pointBy)) {
        console.log(`{${pointAx}, ${pointAy}} to {${pointBx}, ${pointBy}} is valid`);
    } else {
        console.log(`{${pointAx}, ${pointAy}} to {${pointBx}, ${pointBy}} is invalid`);
    }

    function checkDistance(x1, y1, x2, y2) {
        let x = x1 - x2;
        let y = y1 - y2;
        let distance = Math.sqrt(x * x + y * y);
        return Number.isInteger(distance)
    }
}
pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])