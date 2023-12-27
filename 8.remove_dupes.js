//Remove Duplicates from Sorted Array
//Accepted

//better one
removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};
const _arr = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(_arr))

//My solution
// const removeDuplicates = function(nums){

//     let uniques = [];
    
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==uniques[uniques.length-1]){
//             uniques.push(nums[i])            
//         }
//     }

//     for(let i=0;i<nums.length;i++){
//         if(uniques[i]!==undefined){
//             nums[i]=uniques[i]
//         }else{
//             nums[i]= "_"
//         }
//     }

//     return [uniques.length ,nums]
// }

