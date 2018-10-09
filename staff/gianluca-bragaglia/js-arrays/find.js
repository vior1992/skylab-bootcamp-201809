function find(nums, callback) {

    for(var i=0; i<nums.length; i++) {

        if(nums[i] > 10) {

           return callback(nums[i]);
        }
            
    }
}