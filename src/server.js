
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4001
const app = express()
const server = http.createServer(app)

const io = socketIO(server)

var numClients = {};
var articleTexts = {};

io.on('connection', (client) => {

  client.on('edit', function(data) {
    // Data will be the article id
    console.log('SERVER: ENTERING ARTICLE EDIT')
    console.log(data.article);
    
    if (numClients[data.article] == undefined) {
      numClients[data.article] = 1;
    } else {
      numClients[data.article]++;
    }

    //console.log('SERVER: LENGTH')
    //console.log(numClients[data.article]);
    client.join(data.article);
    /*
    if (numClients[data.article] > 1) {
      console.log("SENDING UPDATE")
      console.log(articleTexts[data.article])
      client.emit('change body', articleTexts[data.article])
    }
    */
  });

  client.on('leave edit', function(data) {
    // Data will be the article id
    numClients[data.article]--;
    console.log('SERVER: CLIENT LEAVING EDITOR')
    console.log(data.article)
    console.log('SERVER: LENGTH')
    console.log(numClients[data.article]);
    client.leave(data.article)
  })

  client.on('edit body', function(data) {
    // Data will be the text user is entering
    console.log('SERVER: EDITING EVENT')
    console.log(data)
    console.log()
    articleTexts[data.article] = data.text
    client.broadcast.to(data.article).emit('change body', data.text);
  })

  client.on('edit tags', function(data) {
    // Data will be the text user is entering
    console.log('SERVER: EDITING EVENT')
    console.log(data)
    console.log()
    articleTexts[data.article] = data.text
    client.broadcast.to(data.article).emit('change tags', data.text);
  })

  client.on('edit title', function(data) {
    // Data will be the text user is entering
    console.log('SERVER: EDITING EVENT')
    console.log(data)
    console.log()
    articleTexts[data.article] = data.text
    client.broadcast.to(data.article).emit('change title', data.text);
  })

  client.on('edit description', function(data) {
    // Data will be the text user is entering
    console.log('SERVER: EDITING EVENT')
    console.log(data)
    console.log()
    articleTexts[data.article] = data.text
    client.broadcast.to(data.article).emit('change description', data.text);
  })

  });

  server.listen(port, () => console.log(`Listening on port ${port}`))