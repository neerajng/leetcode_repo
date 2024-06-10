const removeDuplicates = (nums)=> {
    let i = 0;  
    for (let num of nums) {
        if (i < 2 || nums[i - 2] !== num) {
            nums[i] = num;
            i++;
        }
    }
    return nums;
};

const nums=[0,0,1,1,1,1,2,3,3];
console.log(...removeDuplicates(nums));
