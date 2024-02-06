function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If mid element is 1, move to the right
        if (arr[mid] === 1) {
            left = mid + 1;
        } 
        // If mid element is 0, check if it's the first occurrence
        // If yes, then the count of zeroes is (length - mid)
        // If not, move to the left to find the first occurrence
        else {
            if (mid === 0 || arr[mid - 1] === 1) {
                return arr.length - mid;
            } else {
                right = mid - 1;
            }
        }
    }
    // If all elements are 1, return 0
    return 0;
}

module.exports = countZeroes