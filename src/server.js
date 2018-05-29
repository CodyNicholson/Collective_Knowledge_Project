
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
    console.log(data.article);
    client.join(data.article);
  });

  client.on('leave edit', function(data) {
    // Data will be the article id
    console.log('SERVER: CLIENT LEAVING EDITOR')
    console.log(data.article)
    client.leave(data.article)
  })

  client.on('edit event', function(data) {
    // Data will be the text user is entering
    console.log('SERVER: EDITING EVENT')
    console.log(data)
    console.log()
    client.broadcast.to(data.article).emit('change text', data.text);
  })

  });

  server.listen(port, () => console.log(`Listening on port ${port}`))