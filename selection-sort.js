const arr = [5, 12, 1, 4, 56, 21, 30, 9, 19, 3, 2];

for (let i = 0; i < arr.length; i++) {
	for (let j = i + 1; j < arr.length; j++) {
		if (arr[i] > arr[j]) {
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}

console.log(arr);
