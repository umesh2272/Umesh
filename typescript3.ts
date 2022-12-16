function ckeckpalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        
        if(string[i] !== string[len - 1 -i]) {
            return 'it is not a palindrome';
        }
    }
    return 'it is palindrome';
}

//we taking input
const string = 'NAN';

//calling the function
const value = ckeckpalindrome(string);

console.log(value);