const findErrorNums = function(nums) {
    const arr=Array(nums.length+1).fill(0)
    for(let i=0;i<nums.length;i++){
        arr[nums[i]]++
    }
    return [arr.indexOf(2), arr.lastIndexOf(0)]
};

const nums = [3,2,2]
console.log(findErrorNums(nums))
