
const merge_sorted_array = (nums1, m, nums2, n)=>{
    let insertPos = nums1.length - 1;
    m--; n--;
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--]
        console.log(nums1);
    }
}

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

merge_sorted_array(nums1,m,nums2, n)
