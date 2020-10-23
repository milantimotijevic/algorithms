const arr = [5, 12, 1, 4, 56, 21, 30, 9, 19, 3, 2];

for (let i = 1; i < arr.length; ++i) {
	const key = arr[i];
	let j = i - 1;

	while (j >= 0 && arr[j] > key) {
		arr[j + 1] = arr[j];
		j = j - 1;
	}
	arr[j + 1] = key;
}

console.log(arr);
