const express = require('express');
const app = express();
var cors = require('cors');
const helmet = require('helmet');
let bodyParser = require('body-parser');
// const PORT = process.env.PORT || 3000;
const PORT = 3000;

// all routes
var authRoutes = require('./routes/authRoute');

// some dependency 
app.use(bodyParser.urlencoded({extended:true})); // app.use specified middleware functions at the specified path
app.use(bodyParser.json());
app.use(cors({origin:'*'}));

//secure http
app.use(helmet());

// db connection
// const db = require('./database/db')();
// socket connection
var server = require('http').Server(app); // bidirectional and event-based communication between the browser and the server.
var io = require('socket.io')(server,
    {
    cors: {
      origin:'*',
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  }
  ); 
app.set('io',io);

io.on('connection', socket => {
    console.log("new  sockeet connection...");
    socket.emit("test event","hey utsav");
});

// use routes 
app.use('/', authRoutes);

// for debugging
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})



