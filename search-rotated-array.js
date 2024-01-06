function searchRotatedArrayWithoutModulo(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Element found
        }

        // Check which side of the pivot the mid element is on
        if (arr[low] <= arr[mid]) {
            // Left side is sorted
            if (arr[low] <= target && target < arr[mid]) {
                high = mid - 1; // Target is in the left sorted subarray
            } else {
                low = mid + 1; // Target is in the right subarray
            }
        } else {
            // Right side is sorted
            if (arr[mid] < target && target <= arr[high]) {
                low = mid + 1; // Target is in the right sorted subarray
            } else {
                high = mid - 1; // Target is in the left subarray
            }
        }
    }

    return -1; // Element not found
}

// Example usage:
const rotatedArray = [4, 5, 6, 7, 8, 1, 2, 3];
const target = 6;

const index = searchRotatedArrayWithoutModulo(rotatedArray, target);

if (index !== -1) {
    console.log(`Element ${target} found at index ${index}`);
} else {
    console.log(`Element ${target} not found in the array`);
}