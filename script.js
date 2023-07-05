const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(numbers = []) {

    for (let i=0;i<numbers.length;i++){
        const selectedNumber = numbers[i]

        let indexOfMin = i
        let currentMin = numbers[indexOfMin]

        for (let j=i+1; j<numbers.length; j++){

            let jNumber = numbers[j]

            if (jNumber < currentMin){
                indexOfMin = j
                currentMin = numbers[j]
            }

        }

        if (currentMin < selectedNumber) {
            let temp = selectedNumber

            numbers[i] = currentMin
            numbers[indexOfMin] = temp
        }
        
    }

    return numbers

}
