const testingArray = [9, 5, 2, 11, 3, 25, 8, 28, 4, 50];


const selectionSort = (array) => {
    let length = array.length;

    for (let i = 0; i < length; i++) {
        let min = i;
        let temp = array[i];

        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                temp = array[j]

            }
        }
    }
}


console.log(selectionSort(testingArray))