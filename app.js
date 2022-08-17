const express = require("express"); // Access code for express 
const socket = require("socket.io"); // Access code for socket

const app = express(); //Initialized and server ready

app.use(express.static("public")); //public folder m hmtml file h

let port = process.env.PORT || 5000;
let server = app.listen(port, () => { //the second is a callback function jst to check
    console.log("Listening to port" + port); 
})

let io = socket(server); // instance of server

io.on("connection", (socket) => { //jaise hi conection bnega frontend se(index.hrml) , callbk fnc chl jayga
    console.log("Made socket connection");
    // Received data
    socket.on("beginPath", (data) => {
        // data -> data from frontend
        // Now transfer data to all connected computers
        io.sockets.emit("beginPath", data);
    })
    socket.on("drawStroke", (data) => {
        io.sockets.emit("drawStroke", data);
    })
    socket.on("redoUndo", (data) => {
        io.sockets.emit("redoUndo", data);
    })
})