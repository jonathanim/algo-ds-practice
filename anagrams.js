
const validAnagram = (str, str2) => {

    if (str.length !== str2.length) {
        return false;
    }
    let lookup = {};


    for (let char of str) {
        if (!lookup[char]) {
            lookup[char] = 1;
        } else {
            lookup[char]++;
        }
    }

    for (let char of str2) {
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char]--;
        }
    }



    return true;

}

console.log(validAnagram('ab', 'acb')) //false
console.log(validAnagram('zaa', 'zza')) // false
console.log(validAnagram('crara', 'racar')) // true
console.log(validAnagram('monkey', 'keymom')) // false
console.log(validAnagram('anagram', 'gramaan'))