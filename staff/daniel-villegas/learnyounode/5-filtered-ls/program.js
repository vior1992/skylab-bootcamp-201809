var fs = require('fs')
var path = require('path')



fs.readdir(process.argv[2], (error, list) => {

    if (error) throw error

    list.forEach(element => {
        if(path.extname(element) === '.' + process.argv[3]) {
            console.log(element)
        }
    });


})