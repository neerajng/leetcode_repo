//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

//Accepted

//O(n^2)

// const twoSum = function(nums, target){
    
//     for(let i=0;i<nums.length;i++){

//         for(let j=i+1;j<nums.length;j++){
//                if((nums[j]+nums[i])===target){
//                     return [i,j]
//                 }
//             }
//         }
// }

//O(n) Time complexity
const twoSum = function(nums, target){
    let seen={}

    for(let i=0;i<nums.length;i++){
        let x= target - nums[i]             
        
        if(seen[x]!==undefined){
            return [seen[x], i]
        }else{
        seen[nums[i]]=i
        }
    }
}    



const numbers = [3,2,3,7]
const t = 6
console.log(twoSum(numbers, t))

