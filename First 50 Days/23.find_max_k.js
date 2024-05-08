const findMaxK = function(nums) {
    const numSet = new Set(nums)    //new set for unique values
    let maxK = -1                   //set maxK -1   
    for (const num of nums) {       //Iterate array
        if(num>0&&numSet.has(-num)){//check +ve array number and also check -ve number with has method. 
            maxK=Math.max(maxK,num) //find maxK with Math.max(maxK, num)
        }
    }
    return maxK  //return maxK
}

const nums=[-1,10,6,7,-7,1,3,-2]
console.log(findMaxK(nums))
