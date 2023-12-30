var searchInsert = function(nums, target) {
    
    let low=0, high=nums.length-1;

    while(low<=high){
        let mid = (low+high)>>1;
        
        if(target===nums[mid]){
            return mid
        }else if(target< nums[mid]){
            high=mid-1
        }else{
            low=mid+1
        }
    }  
    return low
};

const _nums=[1,3,5,6,]
const _target=4
console.log(searchInsert(_nums, _target))