function loadingBar(percentage) {
    if (percentage === 100) {
        console.log('100% Complete!');
        console.log(`[%%%%%%%%%%]`);
    } else {
        let percetageChar = '%'
        let leftChar = '.'
        let loadedBar = Math.floor(percentage/10)
        let leftBar = 10 - loadedBar;
        console.log(`${percentage}% [${percetageChar.repeat(loadedBar)}${leftChar.repeat(leftBar)}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(100)