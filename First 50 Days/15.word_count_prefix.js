g//traditional approach 
const prefixCount = function(words, pref) {    
    let j=0;
    let count=0;

    for(let i=0;i<pref.length&&j<words.length;i++){
        if(pref[i]!==words[j][i]){
            j++
            i=-1
        }else{
            if(i===pref.length-1){
                count++
                j++
                i=-1
            }           
        }        
    }   
    return count
};

//simple approach
const _prefixCount = function(words, pref) { 
    let count=0
    for(let item of words){
        if(item.startsWith(pref)){
            count++
        }
    }
    return count
}   

const words= ["pay","attention","practice","attend"]
const pref='at'
console.log(prefixCount(words,pref))

