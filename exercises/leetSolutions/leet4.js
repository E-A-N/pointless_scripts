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
    let ray1;
    let ray2;

    //Choose which array to search first
    if(nums1[0] <= nums2[0]){
        ray1 = nums1;
        ray2 = nums2;
    }
    else{
        ray1 = nums2;
        ray2 = nums1;
    }

    //Assign lowest element to flattened array
    flat.push(ray1[0]);

    let leastVal = 0;
    for(let x = 1; x < ray1.length; x++){
        for(let y = 0 + leastVal; y < ray2.length; y++){
            if (ray1[x] >= ray2[y]){
                flat.push(ray2[y]);
            }
            else {
                flat.push(ray1[x]);
                leastVal = y;
                break;
            }
        }
    }
    return flat;
}

var r1 = [1,4,7,9,9];
var r2 = [0,2,4,7,8,9];
var f = medians(r1,r2);
