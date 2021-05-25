var array = [1,2,3,4,5]
function test(arr, value){
    return arr.filter(function(ele){
        return ele != value;
    })

}
var result = test(array,3)
console.log(result);
