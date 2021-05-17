function solve(year, month, day) {
    let myDate = new Date(year, month-1, day);
    let nextDay = new Date(+myDate)
    let dateValue = nextDay.getDate()+ 1
    nextDay.setDate(dateValue)
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth()+1}-${nextDay.getDate()}`);    
}
solve(2016, 9, 30);