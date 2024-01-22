const maximumNumberOfStringPairs = function(words) {
    let obj={}, count=0
    for(let word of words){
        let pair=word.split('').sort().join('')
        if(!obj[pair]){
            obj[pair]=1
        }else if(obj[pair]===1){
            count++
        }
    }
    return count
    
};

const words = ["aa","ab"]
console.log(maximumNumberOfStringPairs(words));