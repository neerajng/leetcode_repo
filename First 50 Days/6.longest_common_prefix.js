// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

//Wrong Answer
//73 / 124 testcases passed
// const longestCommonPrefix = function(strs){
    
//     let lcp= {};
//     let resultString = "";

//     if(strs.length===1){
//         return strs[0]
//     }
//     let flag = 1;
//     strs.forEach((string, i)=>{        
//         for(let char of string){
//             if(lcp[char]==undefined){
//                 lcp[char]=1
//                 let index =string.indexOf(char)
//                 console.log(char!==string[index+1]);
//                 if(char!==string[index+1]){
//                     flag=0
//                 }
//             }else{
//                 if(flag===1 ) lcp[char]++                  
//             }
//         }
//     flag=1          
//     })

//     const valuesArray = Object.values(lcp);
     
//     for(const key in lcp) {
       
//             const value = Number(lcp[key])
//             if(value!==valuesArray[0])return resultString
//             if (value===valuesArray[0]&&value!==1) {
//                 resultString +=key
//             }    
                
            
//         }
//     return resultString

// }

//Solved using reduce in an easy way


const longestCommonPrefix = function(strs) {

    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};
const strings =["aa","aa"]
console.log(longestCommonPrefix(strings))

