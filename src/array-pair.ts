
/**
 * Returns a new array of length `arr1.length`, where each index _n_ is a two-
 * element array `[arr1[n], arr2[n]]`.
 *
 * ```js
 *  pair([1, 2, 3], ["A", "B", "C"])
 *  // -> [[1, "A"], [2, "B"], [3, "C"]]
 * ```
 *
 * ```js
 *  pair(["John", "Joe"], [28, 35, 27, 31])
 *  // -> [["John", 28], ["Joe", 35]]
 * ```
 *
 * ```js
 *  pair(["John", "Joe", "Bob", "Dan"], [28, 35])
 *  // -> [["John", 28], ["Joe", 35], ["Bob", undefined, "Dan", undefined]]
 * ```
 *
 * ```js
 *  pair(["Bob", 31, true], [41, 28, null])
 *  // -> [["Bob", 41], [31, 28], [true, null]]
 * ```
 *
 * @param   {Array<T>}  arr1
 *          The target array.
 * @param   {Array<U>}  arr2
 *          The source array.
 * @return  {Array<[T, U]>}
 *          The pairing of the two argument arrays.
 */
export function pair<T, U>(arr1: Array<T>, arr2: Array<U>): Array<[T, U]> {
    const arr3 = new Array<[T, U]>();
    for (let i = 0; i < arr1.length; i++) {
        const arr1_item = arr1[i];
        const arr2_item = arr2[i];
        arr3.push([ arr1_item, arr2_item ]);
    }
    return arr3;
}
