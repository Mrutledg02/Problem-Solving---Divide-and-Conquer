function sortedFrequency(arr, num) {
    function findFirstOccurrence(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        let firstOccurrence = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === num) {
                firstOccurrence = mid;
                right = mid - 1; // Continue searching on the left side
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return firstOccurrence;
    }

    function findLastOccurrence(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        let lastOccurrence = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === num) {
                lastOccurrence = mid;
                left = mid + 1; // Continue searching on the right side
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return lastOccurrence;
    }

    let firstIndex = findFirstOccurrence(arr, num);
    let lastIndex = findLastOccurrence(arr, num);

    if (firstIndex !== -1 && lastIndex !== -1) {
        return lastIndex - firstIndex + 1;
    } else {
        return -1;
    }
}

module.exports = sortedFrequency