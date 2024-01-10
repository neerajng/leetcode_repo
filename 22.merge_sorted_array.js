const merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;//last index of nums1
    console.log(m--, n--)
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
    return nums1
};

const nums1 = [1,2,3,0,0,0]
,nums2 = [2,5,6]
,n = nums2.length, m = nums1.length-n;
console.log(merge(nums1,m,nums2,n));
