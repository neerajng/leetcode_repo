const maxSum = function(nums) {
    let split= String(nums).split('')
    let index=0, sum=-1, max=0;
    let map={}
     for(let num of split){
        if(!isNaN(num)){
            index++
        }
        if(!map[num]){
            map[num]=1
        }else{
            map[num]++
        }
     }
    
    return map
};

const nums= [31,25,72,79,74]
console.log(maxSum(nums));