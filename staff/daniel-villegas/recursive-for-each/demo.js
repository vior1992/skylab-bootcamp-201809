const falseForEach = require ('./for-each')

const [, , ...nums] = process.argv

falseForEach(nums, num => console.log(num))