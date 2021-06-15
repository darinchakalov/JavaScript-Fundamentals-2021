function test() {
    let num = 1;

    increase(num)
    function increase(num) {
        num++
        return num;
    }
    console.log(num);

}
test()




