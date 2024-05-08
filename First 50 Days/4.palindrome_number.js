//Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = function(x) {

    const num = x.toString()
    const len =num.length-1
    
    for(let i=0;i<=len;i++){

        if(num[i]!==num[len-i]){
            return false
        }else if(i-(len-i)==0 || i-(len-i)==-1){
            return true
        }        
    } 

};


const number = 123921

console.log(isPalindrome(number))