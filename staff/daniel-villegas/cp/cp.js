const fs = require('fs')

const [, , input, output] = process.argv

let readStrm = fs.createReadStream(input)
let writeStrm = fs.createWriteStream(output)

readStrm.pipe(writeStrm)

// writeStrm.on('end')

