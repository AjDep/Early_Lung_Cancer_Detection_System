var SerialPort = require('serialport');
var SerialPort = Serialport.SerialPort;
var portName = process.argv(2);

var myPort = new SerialPort(portName,{
    baudRate:9600,
    parser:serialport.parsers.readline("\r\n")
})

myPort.on('open',onOpen);
myPort.on('data',onData);

function onOpen(){
    console.log("Open connection");
}

function onData(){
    Data = 100;
    console.log("On Data: "+data);
}