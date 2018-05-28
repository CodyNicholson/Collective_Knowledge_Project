

import express from 'express';  
import webpack from 'webpack';  
import path from 'path';  
import config from '../webpack.config.dev';  
import open from 'open';  

const port = 3000;  
const app = express();  
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {  
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));  

app.get('*', function(req, res) {  
  res.sendFile(path.join( __dirname, '../public/index.html'));
});

const server = app.listen(port, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log('listening on port ', port);
  }
});

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

//const port = 8000;
//io.listen(port);
//console.log('listening on port ', port);