
/**
 * Returns a new array of length `arr1.length`, where each index _n_ is a two-
 * element array of `[arr1[n], arr2[n]]`.
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
 * The function optionally takes a third and fourth parameter, which define the
 * index to begin merging at, and the length to merge, respectively.
 *
 * ```js
 *  pair([1, 2, 3], ["A", "B", "C"], 0, 2);
 *  // -> [[1, "A"], [2, "B"]]
 * ```
 *
 * ```js
 *  pair(["John", "Joe", "James"], [28, 35, 42], 1);
 *  // -> [["Joe", 35], ["James", 42]]
 * ```
 *
 * By default, the merging process will begin at index `0`, and will merge `l`
 * elements, where `l` is the length of the shortest array.
 *
 * If the final parameter `finish` is greater than or equal to the length of
 * the largest array, it is automatically set to the length of the largest
 * array.
 *
 * ```js
 *  pair(["John"], [28, 35], 0, 3);
 *  // -> [["John", 28], [undefined, 35]]
 * ```
 *
 * @param   {Array<T>}  arr1
 *          The target array.
 * @param   {Array<U>}  arr2
 *          The source array.
 * @param   {number | undefined} start
 *          The index to start merging.
 * @param   {number | undefined} length
 *          The length to merge.
 * @return  {Array<[T, U]>}
 *          The pairing of the two argument arrays.
 */
export function pair<T, U>(arr1: Array<T>, arr2: Array<U>, start?: number, length?: number): Array<[T, U]> {
    [start, length] = [start || 0, length || Math.min(arr1.length, arr2.length)];
    const arr3 = new Array<[T, U]>();
    for (let i = start; i < start + length; i++) {
        const arr1_item = arr1[i];
        const arr2_item = arr2[i];
        arr3.push([ arr1_item, arr2_item ]);
    }
    return arr3;
}
