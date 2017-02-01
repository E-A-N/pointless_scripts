/*
Median of Two Sortef Arrays

Description: There are two sorted arrys nums1 and nums2 of size m and n respectively. Find the meidan of the two sorted arrays.  The overall runtime complexity should be O(log(m+n))

example1:

nums1 = [1,3];
nums2  = [2];
median(nums1,nums2); //2.0

nums1[1,2];
nums2[3,4];
median(nums1,nums2); //2.5

note: the median of odd lists are (N-length + 1) / 2
      the median of even lists are (N-length/2) + (N-length/2+1)

*/

function medians(nums1,nums2){
    let flat=[];
    for(let x = 0; x < nums1.length; x++){
        for(let y = 0; y < nums2.legnth; y++){
            if (x >= y){
                flat[x] = nums1[x];
                
            }
        }
    }
}
