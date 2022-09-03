function insertSort(arr: number[]) {
    if (arr.length === 0 || arr.length === 1) return arr;

    for (let i = 1, len = arr.length; i < len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    return arr;
}

console.log(insertSort([1,2,3,6,4,5,6,7,3,2]))