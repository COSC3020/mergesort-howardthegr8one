function mergesort(arr) {

    let array = arr.map((element) => [element])

    while(array.length > 1) {
        let newArr = []
        for (let i=0, j=1; j < array.length; i+=2, j+=2) {
            if (j == array.length-2) {
                newArr.push(array[j+1])
            }
            newArr.push(merge(array[j], array[i]))
        }
        array = newArr
    }
    return array[0]
}

// used to merge two given sub-arrays
function merge(array, brray) {
    let length = array.length + brray.length
    let merged = new Array(length)
    
    for (let i=0, j=0, k = 0; k < length; k++) {
        brray[j] = brray[j]??Infinity
        array[i] = array[i]??Infinity
        merged[k] = brray[j]<=array[i]?brray[j++]:array[i++]
    }
    return merged
}
