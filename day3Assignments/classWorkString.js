function reverseString(str)
{   
let chars = str.split("");
console.log(chars);
let reversed = "";

for (let index = chars.length-1; index >= 0 ; index--) {
   reversed = reversed + chars[index];
   
}
    return reversed;

}
    
function ispalindrome(str){

    let reversed = reverseString(str); // Get the reversed string

    if(reversed === str)
        {
        console.log("String is palindrome"); 
        } 
    else {
        console.log("String is not a palindrome");
        
        }  
}

let str = 'hello';
ispalindrome(str);

str = 'civic';
ispalindrome(str);