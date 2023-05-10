const express=require('express')
const app = express()
const cors = require('cors')
const http = require('http');
const bodyParser = require('body-parser')
const {Server} = require('socket.io')
const mongoose = require('mongoose') ;
const usersRouter = require('./router/routes');

app.use(cors())
app.use(bodyParser.json())

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3001",
        methods:["GET","POST"]
    },
});

io.on("connection",(socket)=>{
    console.log(socket.id);

    socket.on("send_message",(data)=>{
        console.log(data)
        socket.emit("recieve_message",data)
    })

    socket.on("disconnect",() =>{
        console.log(socket.id,"user disconnected")
    })
})  

mongoose.connect('mongodb://0.0.0.0:27017/freaktech')

mongoose.connection.on('open',()=>{console.log('connected to mongoDB')})

app.use(usersRouter)

app.get("/",(req,res)=>{
    res.send("hello Backend")
})

io.on('connection',(socket)=>{
    console.log('A user connected')
})

server.listen("4000",()=>{
    console.log("connected")
})