const arr = [5, 12, 1, 4, 56, 21, 30, 9, 19, 3, 2];

for (let i = 1; i < arr.length; i ++) {
	let idx;
	for (let j = i - 1; j >= 0; j--) {
		if (arr[i] < arr[j]) {
			idx = j;
		}
	}
	if (idx) {
		const removed = arr.splice(arr[i], 1)[0];
		arr.splice(idx, 0, arr[idx]);
	}
}

console.log(arr);
