const getCommon = function(nums1, nums2) {
  const set=new Set(nums2)
  for( let num of nums1){
    if(set.has(num)){
        return num
    }  
};
    return -1
}

const _nums1 = [1,2,5], _nums2 = [5,5];
console.log(getCommon(_nums1,_nums2))
