// iterative
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

//recursive
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}
