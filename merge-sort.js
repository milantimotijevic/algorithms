const arr = [5, 12, 1, 4, 56, 21, 30, 9, 19, 3, 2];

function mergesort(array) {
	if (array.length <= 1) {
		return array;
	}

	const middleIndex = Math.floor((array.length) / 2);

	const array1 = array.slice(0, middleIndex);
	const array2 = array.slice(middleIndex);

	return merge(mergesort(array1), mergesort(array2));
}

function merge(left, right) {
	const resultArray = [];
	let leftIndex = 0, rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			resultArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			resultArray.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const sorted = mergesort(arr);
console.log(sorted);
