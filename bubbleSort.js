const testingArray = [1, 5, 2, 11, 3, 25, 8, 28, 4, 50];




// simple bubbleSort
const bubbleSort = (array) => {
    let count = 0;
    let length = array.length;

    for (let i = 0; i < length; i++) {

        for (let j = 0; j < length; j++) {
            count++
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp;
               
            }
        }
    }
    console.log(count)
    return array
}
// optimize bubbleSort
const OptimizeBubbleSort = (array) => {
    let count = 0;
    let length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            count++;
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp;


            }
        }
    }
    console.log(count)
    return array;
}



console.log(OptimizeBubbleSort(testingArray));
console.log(bubbleSort(testingArray));