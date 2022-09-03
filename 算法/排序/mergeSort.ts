function mergeSort(arr: number[]) {
    const len = arr.length
    if (len === 0 || len === 1) return arr;

    const pivot = Math.floor(len / 2)
    const left = mergeSort(arr.slice(0,pivot));
    const right = mergeSort(arr.slice(pivot));

    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArr: number[], rightArr: number[]) {
    const newArr: number[] = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] > rightArr[0]) {
            newArr.push(rightArr[0])
            rightArr.shift()
        } else {
            newArr.push(leftArr[0])
            leftArr.shift()
        }
    }

    return newArr.concat(leftArr, rightArr)
}

console.log(mergeSort([2,4,5,6,3,1,2,3]))