const sumOfSquares = function(nums) {
    let sum=0, n=nums.length
    for(let i=0;i<nums.length;i++){
        j=i+1
        if(n%j===0){
            sum+=nums[i]*nums[i]
        }
    }
    return sum
};

const nums = [2,7,1,19,18,3]

console.log(sumOfSquares(nums));