function passwordValidator(pass) {
    function isValid(password) {
        let isValid = true
        let digitCount = 0;
        if (pass.length > 10 || pass.length < 6) {
            console.log('Password must be between 6 and 10 characters');
            isValid = false;
        }
        let isLetterNumber = /^[0-9a-zA-Z]+$/;
        for (let i = 0; i < pass.length; i++) {
            if(pass[i].match(isLetterNumber)){
                continue;
            } else {
                console.log('Password must consist only of letters and digits');
                isValid = false;
                break;
            }
        }
        for (let i = 0; i < pass.length; i++) {
            if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
                digitCount++;
            }
        }
        if (digitCount < 2) {
            console.log("Password must have at least 2 digits");
            isValid = false;
        }
        if (isValid) {
            console.log("Password is valid");
        }
    }
    isValid(pass)
}
//passwordValidator('login')
passwordValidator('Pa$s$s')