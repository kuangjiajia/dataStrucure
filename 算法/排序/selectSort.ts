function selectSort(arr: number[]) {
    for (let i = 0, len = arr.length; i < len; i++) {
        let min = [i, arr[i]] // 0: index 1: value
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < min[1]) {
                min = [j, arr[j]]
            }
        }
        [arr[i], arr[min[0]]] = [arr[min[0]], arr[i]]
    }
    return arr;
}

console.log(selectSort([1,2,3,6,7,8,4,2,3,1]))