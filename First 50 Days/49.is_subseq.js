//392. Is Subsequence
const isSubsequence = function(s, t) {
    let i=0, j=0;
    while(i<s.length && j<t.length){
        if(s[i]===t[j]){
            i++
        }
        j++
    }
    return s.length===i
};

const s = "abc", t = "hbgdc";
console.log(isSubsequence(s,t));