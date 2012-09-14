var net = require('net');

var LOCAL_PORT  = 6512;
var REMOTE_PORT = 6512;
var REMOTE_ADDR = "192.168.1.25";

var server = net.createServer(function (socket) {
    socket.on('data', function (msg) {
        console.log('  ** START **');
        console.log('<< From client to proxy ', msg.toString());
        var serviceSocket = new net.Socket();
        serviceSocket.connect(parseInt(REMOTE_PORT), REMOTE_ADDR, function () {
            console.log('>> From proxy to remote', msg.toString());
            serviceSocket.write(msg);
        });
        serviceSocket.on("data", function (data) {
            console.log('<< From remote to proxy', data.toString());
            socket.write(data);
            console.log('>> From proxy to client', data.toString());
        });
    });
});

server.listen(LOCAL_PORT);
console.log("TCP server accepting connection on port: " + LOCAL_PORT);