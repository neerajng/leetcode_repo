//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//typically using all the original letters exactly once.

//Result
//Time Limit Exceeded
//32 / 42 testcases passed

// const isAnagram = function(s,t) {
//     if(s.length!==t.length){
//         return false
//     }
//     const sArray = s.split('')
//     const tArray = t.split('')

//     for(let i=0;i<s.length;i++){

//         for(let j=0;j<t.length;j++){

//             if(sArray[i]===tArray[j]){
                
//                 tArray[j]=null;
//                 break;
//             }
//         }
//     }
    
//     for(let k=0;k<t.length;k++){
//         if(tArray[k]!==null){
//             return false
//         }
//     }

//     return true;
// }

const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    var freq = new Array(26).fill(0);
    console.log(freq)
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    
    return true;
};

const s = "anagram"
const t = "nagaram"

console.log(isAnagram(s,t))

