const sumZero = (sortedArray) => {

    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        let sum = sortedArray[left] + sortedArray[right];
        if (sum === 0) {
            return [sortedArray[left], sortedArray[right]]
        } else if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left--;
        }
    }
}




console.log(sumZero([-3, -2, -1, 0, 1, 4, 5])) // -1 and 1 == 0


console.log(sumZero([-2, 0, 3]))
