const majorityElement =  (nums)=> {
    let obj={}
    for(let num of nums){        
     (!obj[num])?obj[num]=1:++obj[num]; 
     if(obj[num]>nums.length/2) return num;
    }
}

const nums = [2,2,1,1,1,2,2, 2];

console.log(majorityElement(nums));