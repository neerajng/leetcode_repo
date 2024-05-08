//Condition Use Binary Search as the topic suggests-
//154.Find Minimum in Rotated Sorted Array II

// First, we take
// low (lo) as 0
// high (hi) as nums.length-1
// By default, if nums[lo]<nums[hi] then we return nums[lo] because the array was never rotated, 
// or is rotated n times

// After entering while loop, we check
// if nums[mid] > nums[hi] => lo = mid + 1 because the minimum element is in the right half of the array
// else if nums[mid] < nums[hi] => hi = mid because the minimum element is in the left half of the array
// else => hi-- dealing with duplicate values
// then we return nums[hi]
const findMin = function(nums) {  
    let lo=0,hi=nums.length-1;
    if(nums[lo]<nums[hi]){
        return nums[lo]
    }
    while(lo<hi){
        let mid=Math.floor((lo+hi)/2)
        if(nums[mid] > nums[hi]){
            lo = mid + 1;
        }else if (nums[mid] < nums[hi]) {
            hi = mid;
        } else {
            hi--;
        }
    }
    return nums[hi]    
};

const nums=[2,2,2,0,1];
console.log(findMin(nums));