function solve(input) {
    let mid = input.length/2;
    let substr1 = input.substring(0, mid)
    let substr2 = input.substring(mid, input.length)
    
    reverse(substr1)
    reverse(substr2)
    
    function reverse(str) {
        let res = ''
        for (let i = str.length-1; i >= 0; i--) {
            res += str[i]            
        }
        console.log(res);
    }
    
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')