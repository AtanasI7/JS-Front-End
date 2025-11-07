function checkPassword(password) {
    let isLengthValid = lengthCheck(password);
    let isAlphaNumValid = alphaNumericCheck(password);
    let isTwoDigitsValid = twoDigitsCheck(password);

    if (isLengthValid && isAlphaNumValid && isTwoDigitsValid) console.log(`Password is valid`);

    function lengthCheck(password) {
        if ((password.length >= 6) && (password.length <= 10)) {
            return true;
            }
        else {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
    }

    function alphaNumericCheck(password) {
        let hasSpecialChar = 0;

        for (let i = 0; i < password.length; i++) {
            let charCode = password[i].charCodeAt();
            

            if (
                !(
                    (charCode >= 48 && charCode <= 57) ||
                    (charCode >= 65 && charCode <= 90) ||
                    (charCode >= 97 && charCode <= 122)
                )
            ) hasSpecialChar++;

        }

        if (hasSpecialChar > 0) {
            console.log(`Password must consist only of letters and digits`);
            return false;
        }
        else return true;
    }

    function twoDigitsCheck(password) {
        let digitCount = 0;

        for (let i = 0; i < password.length; i++) {
            let charCode = password[i].charCodeAt();

            if (charCode >= 48 && charCode <= 57) {
                digitCount++;
            }

            if (digitCount >= 2) {
                return true;
            }
        }

        console.log(`Password must have at least 2 digits`);
        return false;
    }
}

checkPassword('logIn');
checkPassword('MyPass123');
checkPassword('Pa$s$s');