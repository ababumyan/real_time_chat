const http = require('http');
const cors = require('cors');
const express = require('express');
const app = express();
const {Server} = require('socket.io');


app.use(cors());


const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin: "http://localhost:3000",
        methods:["GET","POST"],

    },
});

io.on("connection",(sock)=>{
    console.log("new socket connected with socket id => ",sock.id);
    io.on("disconnect",(sock)=>{
        console.log("user: ",sock.id," just left");
    });
})

server.listen(5000,()=>{
    console.log("server is listening!");
});