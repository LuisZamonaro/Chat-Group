require("dotenv").config()

const express = require('express')
const path = require('path')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const Room = require('./models/RoomModels')


const port = process.env.PORT

const app = express()

// Socket
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:5173'}})

const socketPORT = 3002

io.on('connection', socket => {
    console.log('Usuário conectado!', socket.id)

    socket.on('disconnect', reason => {
        console.log('Usuário desconectado.', socket.id)
    })

    socket.on('set_username', username => {
        socket.data.username = username
    })

    socket.on('message', text => {
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            author: socket.data.username
        })
    })
})

server.listen(socketPORT, () => console.log('Socket rodando na porta 3002'))


// config JSON and formdata response
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// solve CORS
app.use(cors({credentials: true, origin: "http://localhost:5173"}))

// upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// DB connection
require("./config/db.js")

// routes
const router = require("./routes/Router.js")

app.use(router)

const rooms = [];



// Rota para criar uma nova sala com um ID aleatório.
app.post('/rooms', async (req, res) => {
  const { name } = req.body;
  const {description} = req.body;
  const roomId = uuidv4(); // Gere um ID aleatório.

  console.log(req.body)

  const newRoom = await Room.create({
    roomId,
    name,
    description,
  });

  rooms.push(newRoom);

  res.json(newRoom);

});

// Rota para obter informações de uma sala específica por ID.
app.get('/rooms/:id', async (req, res) => {
  const roomId = req.params.id;

  const newRoom = await Room.findById(roomId)

  if (!newRoom) {
    res.status(404).json({ error: 'Sala não encontrada' });
  } else {
    res.json(newRoom);
  }
});

// Rota para atualizar uma sala por ID.
app.put('/rooms/:id', (req, res) => {
  const roomId = req.params.id;
  const room = rooms.find(room => room.id === roomId);

  if (!room) {
    res.status(404).json({ error: 'Sala não encontrada' });
  } else {
    room.name = req.body.name;
    res.json(room);
  }
});

// Rota para excluir uma sala por ID.
app.delete('/rooms/:id', async (req, res) => {
  const roomId = req.params.id;
  const roomIndex = rooms.findIndex(room => room.id === roomId);
  
    await Room.deleteOne({_id:roomId})
    res.json({ message: 'Sala excluída com sucesso' });
  
});

app.get('/rooms', async (req, res) => {

  const getRooms = await Room.find();
  

  res.json(getRooms);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})