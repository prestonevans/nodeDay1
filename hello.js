// let input = process.stdin;
// let count = 0;
// const odd = [];
// let sum = 0;
// console.log('Enter first number')
// input.on('data', (data) => {
//     let num = Number(data);
//     if (isNaN(num)) {
//         console.log('Enter a valid NUMBER');
//         return;
//     }
//     count++;
//     if (count < 10) {
//         if (num % 2 === 0) {
//             sum += num;
//         } else {
//             odd.push(num);
//         }
//         switch (count) {
//             case 1:
//                 console.log('Enter second number');
//                 break;
//             case 2:
//                 console.log('Enter third number');
//                 break;
//             case 3:
//                 console.log('Enter forth number');
//                 break;
//             case 4:
//                 console.log('Enter fifth number');
//                 break;
//             case 5:
//                 console.log('Enter sixth number');
//                 break;
//             case 6:
//                 console.log('Enter seventh number');
//                 break;
//             case 7:
//                 console.log('Enter eighth number');
//                 break;
//             case 8:
//                 console.log('Enter nineth number');
//                 break;
//             case 9:
//                 console.log('Enter tenth and final number');
//                 break;
//         }
//         console.log(`Your sum of even numbers is: ${sum} and average of odd numbers is: ${odd.reduce((a,b) => a + b,0)/odd.length || 0}`);
//         return;
//     }
//     process.exit();
// })
// console.log('hello world');
// for (let i = 1; i <= 10; i++) {
// 	console.log(i, i*2);
// }
// for (let i = 1; i <= 10; i++) {
// 	console.log(i, i * 2 -1);
// }
// let temp = process.argv[2].toLowerCase();
// console.log(temp[0]);
// console.log(temp[1]);
// console.log(temp[2]);

// let sum = 0;
// if (temp === 'odd') {
// 	for (let i = 1; i <= 10; i++) {
// 		console.log(i, i * 2 - 1);
// 	}
// } else if (temp === 'even') {
// 	for (let i = 1; i <= 10; i++) {
// 		console.log(i, i * 2);
// 	}
// } else {
// 	console.error('Enter something valid. Try "even" or "odd"');
// }
// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {};

// const myEmitter = new MyEmitter();

// myEmitter.on('event', function(a,b) {
//     console.log(a,b,this)
// })
// myEmitter.on('event', function(a,b) {
//     console.log('second listener')
// })
// myEmitter.on('error', () => {
//     console.log('oooooops')
// })

// myEmitter.emit('error')
// myEmitter.emit('event','test','test2')

// Day  2

// const EventEmitter = require('events');

// class Robot extends EventEmitter {
//     constructor(name) {
//         super();
//         this.name = name;
//         this.isActive = false;
//         this.once('activate', () => {
//             this.isActive = true;
//             console.log(`${this.name} has ben activated`)
//         })
//         this.on('speak', (said) => {
//             if (this.isActive) {
//                 console.log(`${this.name}: ${said}`)
//             }
//         })
//     }
// }

// const bot = new Robot('Preston');
// bot.emit('speak','hello')
// bot.emit('activate')
// bot.emit('speak','hello')

// Day 2.1

// const EventEmitter = require('events');

// class Plant extends EventEmitter {
//     constructor() {
//         super();
//         this.size = 0;
//         this.hasBeenPlanted = false;
//         this.once('plantSeed', () => {
//             this.hasBeenPlanted = true;
//             this.size = 1;
//             console.log(`The seed has been planted`)
//         })
//         this.on('water', () => {
//             if (!this.hasBeenPlanted) return console.log('You must plant a seed')
//             this.size++;
//             console.log(`There are ${this.size} plants`)
//         })
//         this.on('bugAttack', () => {
//             if (!this.hasBeenPlanted) return console.log('You must plant a seed')
//             this.size--;
//             console.log(`There are ${this.size} plants`)
//         })
//         this.on('harvest', () => {
//             if (!this.hasBeenPlanted) return console.log('You must plant a seed')
//             console.log(`There are ${this.size} plants`)
//             this.removeAllListeners()
//         })
//         this.on('error', () => {
//             console.log('Ooops')
//         })
//     }
// }

// const plant = new Plant();

// console.log('Let\'s play enter plantSeed, water, bugAttack, harvest, or quit')

// let input = process.stdin;

// input.on('data', (data) => {
//     let action = String(data).trim()
//     if (action === 'quit') {
//         console.log('Thanks for playing!')
//         process.exit()
//     }
//     if (action === 'plantSeed') {
//         plant.emit('plantSeed')
//         return
//     }
//     if (action === 'water') {
//         plant.emit('water')
//         return
//     }
//     if (action === 'bugAttack') {
//         plant.emit('bugAttack')
//         return
//     }
//     if (action === 'harvest') {
//         plant.emit('harvest')
//         return
//     }
//     console.log('Invalid input')
// })

// Day 3
// Write

// const fs = require('fs');
// const file = fs.createWriteStream('./masterPreston.txt');

// for(let i = 0; i < 100; i++) {{
//     file.write('test teset setsetse setse set sets')
// }}
// file.end()

// read

// const fs = require('fs');
// const file = fs.createWriteStream('./myNewFile.txt');
// process.stdin.setEncoding('utf-8')

// process.stdin.on('readable', () => {
//     let chunk;
//     while((chunk = process.stdin.read()) != null) {
//         process.stdout.write(`data: ${chunk}`);
//         file.write(`${chunk}`)
//     }
// })

// process.stdin.on('end', () => {
//     process.stdout.write('Done reading\n')
// })
// process.stdin.on('close', () => {
//     process.stdout.write('close end\n')
// })

// crypto

// const fs = require('fs');
// const crypto = require('crypto');

// const fileName = 'plainText.txt';
// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';

// // Use the async `crypto.scrypt()` instead.
// const key = crypto.scryptSync(password, 'salt', 24);

// // The IV is usually passed along with the ciphertext.
// const iv = Buffer.alloc(16, 0); // Initialization vector.

// encrypt();

// setTimeout(decrypt, 1000);

// function encrypt() {
//     const inFile = fs.createReadStream(fileName);
//     const outFile = fs.createWriteStream(fileName + '.out');
//     const encrypt = crypto.createCipheriv(algorithm, key, iv);
//     inFile.pipe(encrypt).pipe(outFile);
// }
// function decrypt() {
//     const inFile2 = fs.createReadStream(fileName + '.out');
//     const outFile2 = fs.createWriteStream(fileName + '.out2');
//     const decrypt = crypto.createDecipheriv(algorithm, key, iv);
//     inFile2.pipe(decrypt).pipe(outFile2);
// }

// Duplex Stream

// const net = require('net');
// const server = net.createServer((socket) => {
//     console.log('Welcome to Echo server\r\n');
//     socket.on('data', (chunk) => {
//         socket.write(chunk);
//     });
//     socket.on('end', socket.end);
// });

// server.listen(3000, () => {
//     console.log('Sever is up')
// })

// Day 4

// const fs = require('fs');

// fs.readdir('./',(err, files) => {
//     if(err) throw err;
//     console.log(files)
// })
// console.log('Reading files...')

// const files = fs.readdirSync('./')
// console.log(files)

// fs.readFile('./plainText.txt','utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// try {
//     const data = fs.readFileSync('./plainText.txt','utf-8');
//     console.log(data)
// }
// catch(e) {
//     console.log('Oh no you messed up...')
// }

// fs.writeFile('./plainText.txt', 'sup', (err) => {
//     if(err) throw err
//     console.log('Done')
// })

// const bacon = process.argv[2].trim()
// const writeTo = process.argv[3].trim()

// fs.readFile(bacon ,'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(`Bacon is printed ${data.match(/\bbacon\b/gi).length} times.`)
//     fs.writeFile(`./${writeTo}`, data.replace(/\bbacon\b/gi,'tasty'), (err) => {
//     if(err) throw err
//     console.log(`${writeTo} file has been created`)
// })
// })

// fs.stat('./bacon.txt', (err, stat) => {
//     if(err) throw err;
//     console.log(stat)
// })
// // if file is readable or writeable
// fs.access('./bacon.txt', fs.constants.R_OK | fs.constants.W_OK, err => {
//     console.log(`./bacon.txt ${err ? 'does not exist' : 'exists'}`)
// })
// fs.access('./bacon.txt', fs.constants.R_OK, err => {
//     console.log(`./bacon.txt ${err ? 'not readable' : 'readable'}`)
// })

// fs.mkdir('./test/test2',{recursive: true}, err => {
//     if (err) throw err;
//     console.log('directory made')
// })
// fs.rmdir('./test', err => {
//     if (err) throw err;
//     console.log('directory removed')
// })
// fs.unlink('./meh.txt', err => {
//     if (err) throw err;
//     console.log('file removed')
// })

// fs.readdir('./lib', {withFileTypes: true}, (err, dirents) => {
//     const fileNames = dirents.filter(dirent => dirent.isFile()).map(dirent => dirent.name)
//     for(let file of fileNames) {
//         if (file[0] !== '.') {
//             fs.readFile(`./lib/${file}`, 'utf8', (err, data) => {
//                 if(err) throw err;
//                 console.log(data)
//             })
//         }
//     }
// })

// Day 6

// const net = require('net')

// const server = net.createServer(client => {
//     //sever code here
// }).listen(5000)

// net.createServer()

// const client = net.createConnection('net')

// const client = net.createConnection({port: 5000} () => {
//     // console.log(connected)
// })

// client.createConnection()
