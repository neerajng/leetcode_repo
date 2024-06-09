

const removeDuplicates = (nums)=>{
    let currVal=nums[0], j=1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==currVal){
            nums[j]=nums[i];
            currVal=nums[i];
            j++;
        }
    }
    return j;
}

const nums=[0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));


