function bubbleSort(arr: number[]) {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1,2,5,6,7,7,3,2,3,5]))