const io = require( "socket.io" )();
const socketapi = {
    io: io
};

var user = []

io.on( "connection", function( socket ) {

    // user.push(socket.id)
    
    
    socket.on("nameofuser" , function(userkaname){
        user.push(userkaname)
        io.emit("online" , user)
        socket.broadcast.emit("notify" , userkaname)
        
    })

    



  
    io.on("disconnect" , function(socket){
        var location  = user.indexOf(socket)
        user.splice(location , 1)
        io.emit("online" , user)
    })
});

module.exports = socketapi;






















//   // console.log( "A user connected" );
//     // user.push(socket.id)
//     socket.on("users" , function(username){
//         user.push(username)
//         io.emit("onlineUser" , user)
//        console.log(user)
//    })

//     socket.on("msgs" , function(data){
//         // console.log(socket.id)
//         // console.log(data)
//         io.emit("reply" ,data)
//     })

//     socket.on("disconnect" , function(socket){
//         console.log("disconnect")
//         var location = user.indexOf(socket)
//         user.splice(location , 1);
//         io.emit("onlineUser" , user)
//     })