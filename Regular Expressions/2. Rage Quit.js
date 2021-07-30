function solve(input) {
    let numPattern = /\d+/g;
    let str = input[0];
    let pattern = /[\D]+/g;
    let nums = [];
    let strings = [];
    while ((match = pattern.exec(str)) !== null) {
        strings.push(match[0]);
    }
    while ((match = numPattern.exec(str)) !== null) {
        nums.push(match[0]);
    }
    let message = "";
    let testMessage = ''
    for (let i = 0; i < strings.length; i++) {
        let current = strings[i];
        message += current.repeat(Number(nums[i]));
        testMessage += current
    }
    let uniqueTest = [...new Set(testMessage.toUpperCase().split(""))];
    let unique = [...new Set(message.toUpperCase().split(""))];
    console.log(`Unique symbols used: ${uniqueTest.length}`);
    console.log(message.toUpperCase());
}
solve(['a3b0c1'])
//solve([
  //  'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':Iz.17*W:mwV`z-15g@hUYE{_$~}+X%*nytkW15',
//]);
