const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const port = new SerialPort({ path: 'COM5', baudRate: 9600 });

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

port.on('error', (err) => {
    console.error('Device not connected');
    if(err.message){
        return null;
    }else{
        console.error('Somthing going wrong');
    }
});

parser.on('error', (err) => {
    console.error('Parser error:', err.message);
});

parser.on('data', console.log);

function onData() {
    const data = null;
    return data;
}

module.exports = onData;