

const countUniqueValues = (sortedArray) => {
    if (sortedArray.length == 0) {
        return 0;
    }
    let j = 0;
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] != sortedArray[j]) {
            j++;
            sortedArray[j] = sortedArray[i];
        }
    }
    return j + 1;
}



console.log(countUniqueValues([1, 1, 1, 2, 3, 4])) // 4
console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 6, 7])) // 7
