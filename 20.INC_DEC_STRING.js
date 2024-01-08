///Incomplete
const sortString = function(s){
    let res=''
    let obj={}
    for(let char of s){
        if(!obj[char]){
            obj[char]=1
        }else{
            obj[char]++
        }
    }
    return obj
}


const s = "leetcode"
console.log(sortString(s))