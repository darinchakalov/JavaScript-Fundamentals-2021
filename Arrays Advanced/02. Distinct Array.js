function solve(arr) {
    //creating a new Set from array (Set does not allow duplicates so such will be removed)
    /*let uniques = new Set(arr)
    // Then creating a new array from Set iwth the spread operator ...
    let backToArra= [...uniques]
    console.log(backToArra.join(' '));*/

    // With the following I am printing the element of the array,
    // its index and then its original index(where it first occurred)
    /*arr.forEach((c, index) => {
        console.log(`${c} - ${index} - ${arr.indexOf(c)}`);
    });*/
    //Simple filter function to include only elements whose indexes match their indexOf values:
    let uniques = arr.filter((num, index)=> {
        return arr.indexOf(num) === index;
    });
    console.log(uniques.join(' '));
}
solve([1, 2, 3, 4, 2, 2])