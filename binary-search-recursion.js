function binarySearch(array, item, lower = 0, upper = array.length - 1) {
    if (lower <= upper) {
        const middle = Math.floor((lower + upper) / 2);

        if (item === array[middle]) {
            return `Item ${item} found at index ${middle}`;
        }

        if (item > array[middle]) {
            return binarySearch(array, item, middle + 1, upper);
        } else {
            return binarySearch(array, item, lower, upper - 1);
        }
    }

    return `Item ${item} not found`;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4));