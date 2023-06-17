const express=require('express')
const app = express()
const cors = require('cors')
const http = require('http');
const bodyParser = require('body-parser')
const {Server} = require('socket.io')
const mongoose = require('mongoose') ;
const usersRouter = require('./router/routes');
const { getOneUserDB } = require('./repo/repos');

app.use(cors())
app.use(bodyParser.json())

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"*",
    },
});

let users = {}

io.on("connection",(socket)=>{

    socket.on('connected',(userId)=>{
        users[userId] = socket.id ;
    })
    console.log(socket.id);
    // users[userId] = socket.id

    socket.on("send_message",async (data)=>{
        console.log("sender",data)
       
        let reciever = await getOneUserDB(data.msg.userId)
        console.log("reciever",reciever)
        // if(sender.length > 0) 
        data.type = "incoming"
        io.to(users[reciever._id]).emit("recieve_message",data)                                         
        console.log("users",users)
    })


    socket.on("disconnect",() =>{
        console.log(socket.id,"user disconnected")
    })
})

// mongoose.connect('mongodb://0.0.0.0:27017/freaktech')

// mongoose.connection.on('open',()=>{console.log('connected to mongoDB')})

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
