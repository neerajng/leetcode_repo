const repeatedCharacter = function(s) {
    
    let obj={}
    
    for(let i=0;i<s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]]=1
        }else if(obj[s[i]]===1){
            return s[[i]]
        }
    }
    return obj

};

const _s='abccbaacz'
console.log(repeatedCharacter(_s))