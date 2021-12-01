const EventEmitter = require('events');

class Plant extends EventEmitter {
	constructor() {
		super();
		this.size = 0;
		this.hasBeenPlanted = false;
		this.once('plantSeed', () => {
			this.hasBeenPlanted = true;
			this.size = 1;
			console.log(`The seed has been planted`);
		});
		this.on('water', () => {
			if (!this.hasBeenPlanted) return console.log('You must plant a seed');
			this.size++;
			console.log(`There are ${this.size} plants`);
		});
		this.on('bugAttack', () => {
			if (!this.hasBeenPlanted) return console.log('You must plant a seed');
			this.size--;
			console.log(`There are ${this.size} plants`);
		});
		this.on('harvest', () => {
			if (!this.hasBeenPlanted) return console.log('You must plant a seed');
			console.log(`There are ${this.size} plants`);
			this.removeAllListeners();
		});
		this.on('error', () => {
			console.log('Ooops');
		});
	}
}

const plant = new Plant();

console.log("Let's play enter plantSeed, water, bugAttack, harvest, or quit");

let input = process.stdin;

input.on('data', (data) => {
	let action = String(data).trim();
	if (action === 'quit') {
		console.log('Thanks for playing!');
		process.exit();
	}
	if (action === 'plantSeed') {
		plant.emit('plantSeed');
		return;
	}
	if (action === 'water') {
		plant.emit('water');
		return;
	}
	if (action === 'bugAttack') {
		plant.emit('bugAttack');
		return;
	}
	if (action === 'harvest') {
		plant.emit('harvest');
		return;
	}
	console.log('Invalid input');
});
