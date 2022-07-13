
const maxSubArraySum = (array, size) => {
    if (array.length < size) {
        return null
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < size; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;

    for (let i = size; i < array.length; i++) {
        tempSum = tempSum - array[i - size] + array[i];
        maxSum = Math.max(maxSum, tempSum);
        console.log(tempSum)
    }
    return maxSum

}



console.log(maxSubArraySum([1, 4, 6, 7, 3, 4, 3, 6], 2)) //13

console.log(maxSubArraySum([1, 4, 6, 7, 3, 4, 3, 6], 4)) //20

console.log(maxSubArraySum([], 3)) // null

