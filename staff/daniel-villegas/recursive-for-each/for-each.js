counter = 0

function RecForEach(nums,num) {
    if (counter !== nums.length) {
        num(nums[counter])
        counter++ 
        RecForEach(nums, num)
    }  
}

module.exports = RecForEach