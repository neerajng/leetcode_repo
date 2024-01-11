const isPalindrome = function(s) {
    s=s.toLowerCase().replace(/[\W_]/g, '')
    for(let i=0,j=s.length-1;i<j;i++,j--){
        if(s[i]!==s[j]){
            return false
        }
    }
    return true
};

const s = "ab_a"

console.log(isPalindrome(s))