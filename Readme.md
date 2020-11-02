ALGORITHMS CHEAT SHEET

SELECTION SORT - 
Repeatedly find the minimum element as you progress down the array. Nested for loop, where i represents the outer and j inner. Each time arr[i] is greater than arr[j] they get swapped.
Quadratic, low memory overhead due to not too many swaps

BUBBLE SORT -
Compare two adjacent elements and swap them accordingly. Do-while until no swaps have occurred, plus nested for loop.
O(n) when it's already sorted, quadratic otherwise.

INSERTION SORT -
Compare the current element to its predecessor. If it is less than it, compare it to the predecessor's predecessor. When you get to the front of the array, or an element that is less or equal to the current element, move the current element to just after it and push forward the ones between.
Quadratic. Low memory overhead, good for smaller arrays or when data is almost sorted.

MERGE SORT -
Split down in half until you get to single-element arrays, then start joining them up in sorted order
O (n log n). Stable complexity.

QUICK SORT -
Choose a pivot (preferably middle element), then start iterating from the left. Move the pointer (incr left index) until you come to an element that is greater than the pivot. Freeze the pointer there. Do the inverse from the right side - move the pointer (decr right index) until you come to an element that is less than the pivot. Swap right and left. Keep doing this until the pointers collide, then divide the array at the collision point (pivot) and call quicksort on the resulting arrays. Keep doing this until the array gets sorted (recursion).
O (n log n) average
O (n square) worst - if the pivot is always the smallest element in the array.

RADIX SORT - 
