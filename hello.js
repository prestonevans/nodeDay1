let input = process.stdin;
let count = 0;
const odd = [];
let sum = 0;
console.log('Enter first number')
input.on('data', (data) => {
    let num = Number(data);
    if (isNaN(num)) {
        console.log('Enter a valid NUMBER');
        return;
    }
    count++;
    if (count < 10) {
        if (num % 2 === 0) {
            sum += num;
        } else {
            odd.push(num);
        }
        switch (count) {
            case 1:
                console.log('Enter second number');
                break;
            case 2:
                console.log('Enter third number');
                break;
            case 3:
                console.log('Enter forth number');
                break;
            case 4:
                console.log('Enter fifth number');
                break;
            case 5:
                console.log('Enter sixth number');
                break;
            case 6:
                console.log('Enter seventh number');
                break;
            case 7:
                console.log('Enter eighth number');
                break;
            case 8:
                console.log('Enter nineth number');
                break;
            case 9:
                console.log('Enter tenth and final number');
                break;
        }
        console.log(`Your sum of even numbers is: ${sum} and average of odd numbers is: ${odd.reduce((a,b) => a + b,0)/odd.length || 0}`);
        return;
    }
    process.exit();
})
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
