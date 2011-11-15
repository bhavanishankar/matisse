var matisse = {
	connectHandler: function(data){
		this.onConnect(data);
	},
	drawHandler: function(data){
		this.onDraw(data);
	},
	sendDrawMsg: function(data){
		socket.emit("eventDraw",data);
	},
	onDraw: function(data){
		//Dummy method must override
		console.log(data);
	},
	onConnect: function(data){
		//Dummy method must override
		console.log(data);
	}
};
var socket = io.connect('http://localhost');
socket.on("eventDraw", function(data){
	console.log("new draw event received--");
	matisse.drawHandler(data);
});
socket.on('eventConnect', function (data) {
	console.log("We are now connected");
	matisse.connectHandler(data);	
});
