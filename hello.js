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
const EventEmitter = require('events');

class Plant extends EventEmitter {
    constructor() {
        super();
        this.size = 0;
        this.hasBeenPlanted = false;
        this.once('plantSeed', () => {
            this.hasBeenPlanted = true;
            this.size = 1;
            console.log(`The seed has been planted`)
        })
        this.on('water', () => {
            if (!this.hasBeenPlanted) return console.log('You must plant a seed')
            this.size++;
            console.log(`There are ${this.size} plants`)
        })
        this.on('bugAttack', () => {
            if (!this.hasBeenPlanted) return console.log('You must plant a seed')
            this.size--;
            console.log(`There are ${this.size} plants`)
        })
        this.on('harvest', () => {
            if (!this.hasBeenPlanted) return console.log('You must plant a seed')
            console.log(`There are ${this.size} plants`)
            this.removeAllListeners()
        })
        this.on('error', () => {
            console.log('Ooops')
        })
    }
}

const plant = new Plant();

console.log('Let\'s play enter plantSeed, water, bugAttack, harvest, or quit')

let input = process.stdin;

input.on('data', (data) => {
    let action = String(data).trim()
    if (action === 'quit') {
        console.log('Thanks for playing!')
        process.exit()
    }
    if (action === 'plantSeed') {
        plant.emit('plantSeed')
        return
    }
    if (action === 'water') {
        plant.emit('water')
        return
    }
    if (action === 'bugAttack') {
        plant.emit('bugAttack')
        return
    }
    if (action === 'harvest') {
        plant.emit('harvest')
        return
    }
    console.log('Invalid input')
})

// plant.emit('plantSeed')
// plant.emit('water')
// plant.emit('bugAttack')
// plant.emit('harvest')
// plant.emit('water')
// plant.emit('water')
// plant.emit('water')
// plant.emit('water')

