function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(ifPalindrome(arr[i])); 
    }
    function ifPalindrome(num) {
        let numToString = num.toString();
        let reverseString = numToString.split("").reverse().join("")
        if (numToString === reverseString) {
            return true;
        } else {
            return false;
        }
    }
}
palindromeIntegers([123,323,421,121])