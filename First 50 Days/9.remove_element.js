const removeElement = function(nums, val) {
    let i=0;

    for(let j=0;j<nums.length;j++){
        if(nums[j]!==val){
            nums[i++]=nums[j]
        }        
    }

    return i++
       
};

const _arr = [3,2,2,3];//[2,_,2,3]//[2,2,_,3]//[]

console.log(removeElement(_arr,3))