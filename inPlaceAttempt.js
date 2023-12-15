// I know this version doesn't actually work but it was my best attempt at an in-place iterative version
// I easily worked on this exercise more than any other exercise all semester, really frustrated that I 
// couldn't get it working but wanted to at least push this code so you could see if I was on the right track

function mergesort(arr) {

    // used to control while loop iterations
    let flag = 1
    let iterations = Math.round(Math.log2(arr.length))

    // sorts pairs of elements
    for (let i = 0, j = 1; j < arr.length; i+=2, j+=2) {
        if (arr[j] < arr[i]) {
            let tmp = arr[j]
            arr[j] = arr[i]
            arr[i] = tmp
        }
    }
    while (flag < iterations) {
        let i = 0
        let j = Math.pow(2, flag)
        let increments = j-1
        let step = j+1 

        for (i, j; j < arr.length; i+= step+1, j+=step+1) {
            arr = sortSub(arr, i, j, step)
        }
        flag++ // ends while loop
    }
    return []
}

function sortSub(arr, leftPointer, rightPointer, step) {
    let leftEnd = rightPointer 
    let rightEnd = rightPointer + step-1
    for (let i = leftPointer; i < leftEnd; ) {
        for (let j = rightPointer; j < rightEnd; ) {
            if (arr[i] < arr[j]) {
                i++
            }
            else {
                let tmp = arr.splice(j, 1)
                arr.unshift(tmp)
                i++, j++
            }
            if (i >= j)
                j++
        }
    }
    return arr
}

// array I used for testing
let testArr0 = [8, 7, 6, 5, 4, 3, 2, 1]
mergesort(testArr0)
console.log("sorted array: " + testArr0)
