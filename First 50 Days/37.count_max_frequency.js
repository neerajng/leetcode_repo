const maxFrequencyElements = function(nums) {
    let obj={}, maxF=0,sum=0
    for (let num of nums) {
        if(!obj[num]){
            obj[num]=1
            maxF=Math.max(obj[num],maxF)
        }else{
            obj[num]++
            maxF=Math.max(obj[num],maxF)
        }  
    }

    for(let key in obj){
        if(obj[key]===maxF){
            sum+=maxF
        }
    }
    return sum
};

const nums = [10,12,11,9,6,19,11]
console.log(maxFrequencyElements(nums))