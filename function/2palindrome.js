function getPalindrome(number) {
    let reversedNumber = 0;
    while (number > 0) {
        let remainder = number % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        number = Math.floor(number / 10);
    }
    return reversedNumber;
}