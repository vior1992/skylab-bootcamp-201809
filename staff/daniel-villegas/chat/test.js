const net = require('net');

const server = net.createServer();

//All active connections are stored in this object together with their client name
let clients = {}
//Stores the number of active clients
let clientCount = 0;

server.on('connection', connection => {
  let clientname;
  let message = [];

  //Helper function that helps us send a message to every other client connected   function broadcast( msg ){
    //Loop through the active clients object
    for( let client in clients ){
      //Send message to all active clients except yourself 
      if( clients[client] !== connection ){
        clients[client].write(msg);
      }
    }
  })

  connection.write(`Please enter a room name\r\n`);

  connection.setEncoding('utf-8');

  connection.on('data', data => {
    //Push every keystroke into an array
    message.push(data);

    //Proceed only if the 'enter' key has been pressed
    if( data == '\r\n'){

      //Join the keystrokes stored and remove the 'enter' character
      let clientInput = message.join('').replace('\r\n','');

      //Proceed if client name does not exist
      if(!clientname){
        //Check whether client name is already taken
        if( clients[clientInput] ){
          connection.write(' - Name is taken, try another name\r\n')
          //Discard of the previous keystrokes the client entered
          message = [];
          return;
        } else {
          //Store the client name
          clientname = clientInput;
          //Increase the number of active clients
          clientCount++;
          //Store the connections by client name
          clients[clientInput] = connection;
          //Welcome the client
          connection.write(`- Welcome to the Chatbox, There are ${clientCount} active users\r\n`);
          //Send a message to every active client that someone just joined the room 
          broadcast(`- ${clientname} has joined the room\r\n`);           //Discard the previous keystrokes the client entered
          message = [];
        }
      } else { 
        //Send the message received to every client
        broadcast(`> ${clientname} : ${clientInput}\r\n`);
        //Discard the previous keystrokes the client entered
        message = [];
      }
    }
  })

  //A close event is emmited when a connection is disconnected from the server
  connection.on('close', () => {
    //When a client disconnecs, remove the name and connection
    delete clients[clientname];
    //Decrease the active client count
    clientCount--;
    //Send a message to every active client that someone just left the room
    broadcast(`- ${clientname} has left the room\r\n Active Users : ${clientCount}\r\n`);
  })

  //Handle error events
  connection.on('error', error => {
    connection.write(`Error : ${error}`);

});

server.on('close', () => { 
  console.log(`Server disconnected`)
});

server.on('error', error => { 
  console.log(`Error : ${error}`);
});

server.listen(4000);