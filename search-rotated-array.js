function findIndexOf(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // check target is at the tail, middle or the head of the current portion
        if (target === arr[mid]) {
            return mid;
        }

        if (target === arr[low]) {
            return low;
        }

        if (target === arr[high]) {
            return high;
        }

        // Check which side of the pivot the mid element is on
        if (arr[low] <= arr[mid]) {
            // Left side is sorted
            if (arr[low] < target && target < arr[mid]) {
                high = mid - 1; // Target is in the left sorted subarray
            } else {
                low = mid + 1; // Target is in the right subarray
            }
        } else {
            // Right side is sorted
            if (arr[mid] < target && target < arr[high]) {
                low = mid + 1; // Target is in the right sorted subarray
            } else {
                high = mid - 1; // Target is in the left subarray
            }
        }
    }

    return -1; // Element not found
}

console.log(findIndexOf([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6], 3))