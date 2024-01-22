var isFascinating = function(n) {
    let obj={}
    let concat=''+n+(n*2)+(n*3)
    if(concat.length!==9) return false

    for(let i of concat){
        if(i==='0') return false
        if(!obj[i]){
            obj[i]=1
        }else{
            return false
        }
    }
    return true
};

const n = 192
console.log(isFascinating(n));