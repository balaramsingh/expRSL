const express = require("express");
const mongoose = require("mongoose");
 
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
 
const cors = require("cors");
dotenv.config();
 
//set up server
const app = express();
const PORT = 5000;
app.listen(PORT,() => console.log(`server started on port: ${PORT}`));
 
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
})
);
//connect to mongoDB
 
mongoose.connect(process.env.MDB_CONNECT, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, 
    (err) => {
    if(err) return console.error(err);
    console.log("Connected to MongoDB");
}
);
 
//set up routes
app.use("/auth", require("./routers/userRouter"));

const salesRouter = require('./routers/sales');
app.use('/sales',salesRouter);


let model = require("./models/sale.model");

app.post("/sales/search",function(req, res) {
  model.find({
    $or: [
      {ownername:req.body.user},
      {purpose:req.body.option1},
      {purpose:req.body.option2},
      {purpose:req.body.option3},
      {ownername:req.body.user},
      {sale_type:req.body.option4},
      {sale_type:req.body.option5},
      {sale_type:req.body.option6},
      { price: { $lt:req.body.option7}} ,
    ]
  })
  
    .then(sales=>res.json(sales))
    .catch(err=>res.status(400).json('Error : '+err));
});

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const rooms = {  }

app.get('/chat', (req, res) => {
  res.render('chat', { rooms: rooms })
})

app.get('/index', (req,res) => {
  res.render('index')
})

app.post('/room', (req, res) => {
  if (rooms[req.body.room] != null) {
    return res.redirect('/')
  }
  rooms[req.body.room] = { users: {} }
  res.redirect(req.body.room)
  // Send message that new room was created
  io.emit('room-created', req.body.room)
})

app.get('/:room', (req, res) => {
  if (rooms[req.params.room] == null) {
    return res.redirect('/')
  }
  res.render('room', { roomName: req.params.room })
})

server.listen(4000)

io.on('connection', socket => {
  socket.on('new-user', (room, name) => {
    socket.join(room)
    rooms[room].users[socket.id] = name
    socket.to(room).emit('user-connected', name)
  })
  socket.on('send-chat-message', (room, message) => {
    socket.to(room).emit('chat-message', { message: message, name: rooms[room].users[socket.id] })
  })
  socket.on('disconnect', () => {
    getUserRooms(socket).forEach(room => {
      socket.to(room).emit('user-disconnected', rooms[room].users[socket.id])
      delete rooms[room].users[socket.id]
    })
  })
})

function getUserRooms(socket) {
  return Object.entries(rooms).reduce((names, [name, room]) => {
    if (room.users[socket.id] != null) names.push(name)
    return names
  }, [])
}
