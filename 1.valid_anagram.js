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

const isAnagram = function(s,t) {
    if(s.length!==t.length){
        return false
    }
    
    const sLetters = {}

    for(let char of s){
        if(!sLetters[char]){
            sLetters[char]=1
        }else{
            sLetters[char]++
        }
    }

    for(let char of t){
        if(!sLetters[char]){
            return false
        }

        if(sLetters[char]){
            sLetters[char]--
        }

        if(sLetters[char]===0){
            delete sLetters[char]
        }
    }

    return Object.keys(sLetters).length===0;
}
const s = "anagram"
const t = "nagaram"

console.log(isAnagram(s,t))

