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
O (n log n). Stable complexity

HEAP SORT -

QUICK SORT - 
