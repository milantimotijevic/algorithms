function searchRotatedArray(arr, target) {
    const n = arr.length;
    let low = 0;
    let high = n - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    const pivot = low;

    low = 0;
    high = n - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = arr[(mid + pivot) % n];

        if (midValue === target) {
            return (mid + pivot) % n;
        } else if (midValue < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

const rotatedArray = [4, 5, 6, 7, 8, 1, 2, 3];
const target = 6;

const index = searchRotatedArray(rotatedArray, target);

if (index !== -1) {
    console.log(`Element ${target} found at index ${index}`);
} else {
    console.log(`Element ${target} not found in the array`);
}