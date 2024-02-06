function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        //If the array is already sorted, return 0 (no rotation)
        if (arr[left] <= arr[right]) return left;

        let mid = Math.floor((left + right) / 2);
        let next = (mid + 1) % arr.length; //Calculate the index of the next element

        //Check if the mid element is the smallest (pivot)
        if (arr[mid] <= arr[next] && arr[mid] <= arr[mid - 1]) {
            return mid;
        } else if (arr[mid] <= arr[right]) {
            //If the mid element is less than or equal to the right element, the pivot is on the left half
            right = mid - 1;
        } else {
            //If the mid element is greater than the right element, the pivot is on the right half
            left = mid + 1;
        }
    }
    return -1; //Return -1 if the array is not rotated
}

module.exports = findRotationCount