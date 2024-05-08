//oneline solution
var strSt = (haystack, needle) => haystack.indexOf(needle);

//without built in solution
const strStr = function(haystack, needle) {
    let k=0
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]==needle[k]){
            k++;
            if(k==needle.length){
                return i-(k-1)
            }
        }
        else{
            i=i-k;
            k=0;
        }
    }
    return -1
};

console.log(strStr('chadbutsad','sad'))