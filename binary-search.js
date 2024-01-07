function binarySearch(array, item) {
    let lower = 0;
    let upper = array.length - 1;
    let iterations = 0;

    while (lower <= upper) {
        iterations++;
        console.log(`iterations: ${iterations}`);
        const middle = Math.floor((lower + upper) / 2);
        if (item === array[middle]) {
            return `Item ${item} found at index ${middle}`;
        }

        if (item > array[middle]) {
            lower = middle + 1;
        } else {
            upper = middle - 1;
        }
    }

    return `Item ${item} not found`;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4));