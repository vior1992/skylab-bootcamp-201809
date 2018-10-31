var path = require('path')
var fs = require('fs')

const {argv: [,,recu, src, dest]} = process

if (recu === '-R') {
    var recursive = function(src, dest) {
        
        if(fs.lstatSync(src).isDirectory()){

            fs.mkdirSync(dest)

            fs.readdirSync(src).forEach((item) => {
            recursive(path.join(src, item),
                                path.join(dest, item))
            })
        } else fs.createReadStream(src).pipe(fs.createWriteStream(dest))
    }

    recursive(src, dest)

}else fs.createReadStream(recu).pipe(fs.createWriteStream(src))

