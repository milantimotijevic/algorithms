ALGORITHMS CHEAT SHEET

SORT ALGORITHMS

SELECTION SORT - 
Iterate through the array and for each iteration do a whole new iteration over the (almost) entire array. Nested for loop, where i represents the outer and j inner. Continuously compare arr[i] and arr[j] where j is always i + 1. Each time arr[i] is greater than arr[j] they get swapped.
Quadratic time complexity, low memory overhead due to not too many swaps

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

SEARCH ALGORITHMS

Linear Search:

Linear Search:
Description: Iterates through each element of the array sequentially until a match is found or the end of the array is reached.
Time Complexity: O(n) (linear time).

Binary Search:
Description: Requires a sorted array. It repeatedly divides the search space in half until the target element is found or the search space is empty.
Time Complexity: O(log n) (logarithmic time).
Note: Binary search is efficient but requires a sorted array.

Hashing (Hash Table):
Description: Utilizes a hash function to map keys to array indices, allowing for constant-time average case lookups.
Time Complexity: O(1) on average, but may degrade to O(n) in the worst case.
Jump Search:

Description: Similar to binary search, but instead of dividing the array into halves, it jumps ahead by a fixed number of steps.
Time Complexity: O(√n) (square root time).

Exponential Search:
Description: Involves two steps - first, locate a range where the target may be present, and then perform a binary search within that range.
Time Complexity: O(log n) (logarithmic time).

Interpolation Search:
Description: Particularly useful for uniformly distributed data. It estimates the position of the target based on its value and the values at the ends of the search range.
Time Complexity: O(log log n) on average, but can be O(n) in the worst case.

Ternary Search:
Description: Divides the array into three parts instead of two, narrowing down the search space based on comparisons.
Time Complexity: O(log3 n) (logarithmic time).

SOLID

**Single Responsibility Principle (SRP):**
Idea: A class should have only one reason to change.
Simple Explanation: Each class should do one thing and do it well. If a class has too many responsibilities, it becomes harder to understand and maintain.


**Open/Closed Principle (OCP):**
Idea: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
Simple Explanation: You can add new features or behaviors without changing existing code. This promotes code stability and reusability.


**Liskov Substitution Principle (LSP):**
Idea: Subtypes must be substitutable for their base types without altering the correctness of the program.
Simple Explanation: If you have a base class and a derived class, you should be able to use objects of the derived class wherever objects of the base class are expected, without causing issues.

**Interface Segregation Principle (ISP):**
Idea: A class should not be forced to implement interfaces it does not use.
Simple Explanation: Classes should not be burdened with implementing methods they don't need. It's better to have smaller, more specific interfaces.

**Dependency Inversion Principle (DIP):**
Idea: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.
Simple Explanation: Depend on abstractions (like interfaces) rather than concrete implementations. This promotes flexibility and makes it easier to change parts of the system without affecting others.