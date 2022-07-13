const binarySearch = (arr, target) => {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = start + Math.floor((end - start) / 2);

        if (arr[middle] == target) {
            return middle;
        }
        if (target < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

    }

    return -1;
}



console.log(binarySearch([1, 5, 6, 9, 10, 16, 20, 22, 25, 30], 20))
console.log(binarySearch([1, 5, 6, 9, 10, 16, 20, 22, 25, 30], 21))