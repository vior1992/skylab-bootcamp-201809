function find(nums, callback) {
    var k;
    for(var i=0; i<nums.length; i++) {
        k = callback(nums[i]);
        if (k == true) {
            return nums[i];
        }   
    }
}