function find(nums, callback) {
    var index = 0;
    var value = 0
    var flag = false;
   
    for(index=0; index<nums.length; index++) {

        flag = callback(nums[index]);

        if(flag == true) {
            return nums[index];
            index = nums.length-1;
        }
    }
    if (flag == false) { return undefined; }
}