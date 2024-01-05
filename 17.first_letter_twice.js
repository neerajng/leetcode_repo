const repeatedCharacter = function(s) {
    let obj={}
    for(let char of s){
        if(!obj[char]){
            obj[char]=1
        }else {
            return char
        }
    }
};

const _s='abcbcbaacz'
console.log(repeatedCharacter(_s))