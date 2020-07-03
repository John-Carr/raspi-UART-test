const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/serial0', { baudRate: 256000 })
const parser = new Readline()
var msg = "test\n";
port.pipe(parser)
port.write(msg);
console.log(msg);
port.on('error', function(err){console.log('Error: ', err.message)});
port.on('data',(line) => {
	console.log(line);
});

