const countUniqueValuesNS = (nonSortedArray) => {
    if (nonSortedArray.length == 0) {
        return 0
    }
    let map = {};

    for (let i = 0; i < nonSortedArray.length; i++) {
        if (!map[nonSortedArray[i]]) {
            map[nonSortedArray[i]] = 1
        } else {
            map[nonSortedArray[i]]++
        }

    }

    // return Object.keys(map).length // returns how many unique values 

    let arr = Object.keys(map).map((char) => {
        return Number(char)
    })
    return arr // retuns unique values in the array
}


console.log(countUniqueValuesNS([1, 1, 5, 10, 11, 5, 10, 12])) // 5

console.log(countUniqueValuesNS([1, 2, 10, 11, 5, 3, 12])) // 7
console.log(countUniqueValuesNS([1, 4, 10, 7, 5, 10, 12])) // 6
console.log(countUniqueValuesNS([])) // 0 


