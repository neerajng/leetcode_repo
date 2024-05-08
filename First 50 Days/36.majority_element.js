const majorityElement = (nums)=> {
    const obj={}
    for(let num of nums){
        (!obj[num])?obj[num]=1:obj[num]++;        
        if(obj[num]>nums.length/2) return num
    }
};

const nums=[3,2,9,9,9]
console.log(majorityElement(nums));