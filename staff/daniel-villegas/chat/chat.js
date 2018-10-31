const net = require('net')

const server = net.createServer()

let clients = {}
let clientCount = 0

server.on('connection', connection => {
    let clientName
    let message = []

    connection.write('Plizzz enter a name for da room')

    connection.setEncoding('utf-8')

    connection.on('data', data => {
        message.push(data)

        if (data == '\r\n') {
            let clientInput = message.join('').replace('\r\n', '')


            if (!clientName){
                if(clients[clientInput]){

                    connection.write(' name is used for other user, choose other\r\n')

                    message = []

                    return
                } else {
                    clientName = clientInput

                    clientCount ++

                    clients[clientInput] = connection

                    connection.write(`привет товарищ, users on chat: ${clientCount} \r\n`)

                    broadcast(`- ${clientName} has joined the room\r\n`)
                    
                    message = []
                }
            } else {
                broadcast(`> ${clientName} : ${clientInput}\r\n`)
                message = []
            }
        }
    })
 
    connection.on('close', () => {
        delete clients[clientname]

        clientCount--;

        broadcast(`- ${clientname} has left the room\r\n Active Users : ${clientCount}\r\n`)
    })

    connection.on('error', error => {
        connection.write(`Error : ${error}`)
      })
    
})

server.on('close', () => { 
    console.log(`Server disconnected`)
  })

server.on('error', error => { 
    console.log(`Error : ${error}`)
  })

server.listen(4000)