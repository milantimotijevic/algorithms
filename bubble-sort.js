const arr = [5, 12, 1, 4, 56, 21, 30, 9, 19, 3, 2];

let swapped;

do {
	swapped = false;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			swapped = true;
			const temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
		}
	}
} while (swapped);



console.log(arr);
