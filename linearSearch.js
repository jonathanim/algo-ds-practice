

const linearSearch = (arr, target) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}


console.log(linearSearch([1, 5, 6, 9, 10, 16, 20, 22, 25, 30], 20))
console.log(linearSearch([1, 5, 6, 9, 10, 16, 20, 22, 25, 30], 21))