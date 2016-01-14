var express = require('express')
var app = express();
var server = require('http').Server(app);

app.use(express.static('public'))
server.listen(8000);

var io = require('socket.io')(server)
io.on('connection', function(socket){
	console.log('YEAH!');
	socket.on('turn', function(params){
		if(params.value == 1){
			pin.high();
		}else{
			pin.low();
		}
	})
})

var five = require('johnny-five')
var board = new five.Board()
var pin
board.on('ready', function(){
	pin = new five.Pin(13)
	pin.high()
})