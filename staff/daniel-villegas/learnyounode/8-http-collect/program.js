var bl = require('bl')
var http = require('http')

const [, , url] = process.argv

http.get(url, (response) => {
    response.pipe(bl((err, data) => {
        if (err) 
            return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})