//The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
//Given an integer array nums, choose four distinct indices w, x, y, and z such that the product 
//difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
//Return the maximum such product difference.

//Result
// Wrong Answer
// 68 / 96 testcases passed
//nums = [10,10,10,10]
// Output
// -180143985094819808
// Expected
// 0
//So I removed number !=firstMax/firstMin for secondMax/secondMin

const maxProductDifference = function(nums) {    

    let firstMax=Number.MIN_SAFE_INTEGER
    let secondMax=Number.MIN_SAFE_INTEGER

    let firstMin = Number.MAX_SAFE_INTEGER
    let secondMin = Number.MAX_SAFE_INTEGER

    for(let number of nums){
        if(number>firstMax){
            secondMax = firstMax
            firstMax = number
        }else if(number>secondMax ){
            secondMax = number
        }

        if(number<firstMin){
            secondMin=firstMin
            firstMin=number
        }else if(number<secondMin){
            secondMin = number
        }
        
    }

    return (firstMax*secondMax) - (firstMin * secondMin)
}


const numbers = [10,10,10,10]

console.log(maxProductDifference(numbers))