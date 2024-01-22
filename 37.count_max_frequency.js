const maxFrequencyElements = function(nums) {
    const obj={}
    for(let num of nums){
        if(!obj[num]){
            obj[num]=1
        }else{
            obj[num]++
        }
    }    
    return obj
};

const nums = [1,2,2,3,1,4]
console.log(maxFrequencyElements(nums))