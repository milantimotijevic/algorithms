const arr = [5, 12, 1, 4, 56, 21, 30, 9, 19, 3, 2];

function swap(items, leftIndex, rightIndex) {
	const temp = items[leftIndex];
	items[leftIndex] = items[rightIndex];
	items[rightIndex] = temp;
}

function partition(items, left, right) {
	let pivot = items[Math.floor((right + left) / 2)], //middle element
		i = left,
		j = right;
	while (i <= j) {
		while (items[i] < pivot) {
			i++;
		}
		while (items[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}
	return i;
}

function quickSort(items, left, right) {
	let index;
	if (items.length > 1) {
		index = partition(items, left, right);
		if (left < index - 1) {
			quickSort(items, left, index - 1);
		}
		if (index < right) {
			quickSort(items, index, right);
		}
	}
	return items;
}

const sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);
