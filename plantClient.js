const net = require('net'); // Client Code  .
const input = process.stdin;
const client = net.createConnection({ port: 3000 }, () => {
    // once connected .
	console.log('connected to server!');
	client.write('1 ... Anyone there!\r\n');
	client.write('2 ... What did you say!\r');
});

client.on('data', (data) => {
    console.log('Msg from server:' + data.toString());
	// client.end();
});
input.on('data', (data) => {
    client.write(data.toString());
})
client.on('end', () => {
	console.log('End of Message');
});
