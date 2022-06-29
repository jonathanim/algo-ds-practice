const testingArray = [1, 5, 2, 11, 3, 25, 8, 28, 4, 50];

console.log(testingArray)
const bubbleSort = (array) => {

    let length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}



console.log(bubbleSort(testingArray));