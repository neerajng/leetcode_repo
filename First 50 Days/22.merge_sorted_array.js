const merge = function (nums1, m, nums2, n) {
    //last index of nums1
    let insertPos = nums1.length - 1;
    //last index of nums1(0 excludes) and nums2
    m--; n--;

    while (n >= 0) {
        console.log(m,n)
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
        console.log(nums1)
    }
};

const nums1 = [4,5,6,0,0,0]//[1,2,_,3,5,6]
,nums2 = [1,2,3]
,n = nums2.length, m = nums1.length-n;
merge(nums1,m,nums2,n)

