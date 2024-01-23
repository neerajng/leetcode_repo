const containsDuplicate = function(nums) {
    let obj={}
    for(let num of nums){
        if(!obj[num]){  
            obj[num]=1
        }else{
            return true
        }   
    }
    return false
};

const nums = [1,2,3,1]
console.log(containsDuplicate(nums));