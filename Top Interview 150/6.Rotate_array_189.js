//O(m+n) approach
const rotateArray1=(nums, k)=>{
    k%=nums.length;//prevent unnecessary rotations eg: 1%5=1 and 6%5=1;
    const lastIdx=nums.length-1;
    for(let i=lastIdx;i>=0;i--){
        nums[i+k]=nums[i]
    }
    for(let j=k-1;j>=0;j--){
        nums[j]=nums.pop()
    }    
    return nums
}

//O(n) approach
const rotateArray2=(nums, k)=>{
    k%=nums.length;
    function reverseArr(arr,l,r){
        while(l<r){
            temp=arr[l];
            arr[l]=arr[r];
            arr[r]=temp;
            r--;
            l++;
        }
        return arr;
    }
    const wholeRev=reverseArr(nums,0,nums.length-1);
    const firstPartRev=reverseArr(wholeRev,0,k-1)
    return reverseArr(firstPartRev,k,nums.length-1)
}
let nums = [1,2,3,4,5,6], k = 3;
console.log(...rotateArray2(nums,k))