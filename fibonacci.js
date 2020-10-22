
let first = 0;
let second = 1;
let third;

console.log(first);
console.log(second);

for (let i = 0; i < 100; i++) {
	third = first + second;
	first = second;
	second = third;

	console.log(third)
}

