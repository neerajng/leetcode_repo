const singleNumber=function(nums) {
    let obj={}
    for(let num of nums){
        if(!obj[num]){
            obj[num]=1
        }else if(obj[num]===1){
            delete obj[num]
        }
    }
    return Number(Object.keys(obj))
};

const nums = [4,1,2,1,2]
console.log(singleNumber(nums));