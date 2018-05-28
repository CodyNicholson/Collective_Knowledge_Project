
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4001
const app = express()
const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', (client) => {

  client.on('edit', function(data) {
    // Data will be the article id
    console.log('SERVER: ENTERING ARTICLE EDIT')
    console.log(data)
    socket.join(data.room);
  });

  client.on('leave edit', function(data) {
    // Data will be the article id
    console.log('SERVER: CLIENT LEAVING EDITOR')
    console.log(data)
    socket.leave(data.room)
  })

  client.on('edit event', function(data) {
    // Data will be the text user is entering
    console.log('SERVER: EDITING EVENT')
    console.log(data)
    socket.broadcast.to(data.room).emit('receive code', {code: data.code, currentlyTyping: data.currentlyTyping});
  })

  });

  server.listen(port, () => console.log(`Listening on port ${port}`))