// 递归
function quickSort1(arr: number[]) {
    if (arr.length === 1 || arr.length === 0) return arr;
    const key = arr[0];
    const leftArr: number[] = [];
    const rightArr: number[] = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > key) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }

    return [...quickSort1(leftArr), key ,...quickSort1(rightArr)]
}
console.log(quickSort1([1,3,6,3,4,5,6,7]))

function quickSort2(arr: number[]) {
    _quickSort2(arr, 0, arr.length - 1);
    function _quickSort2(arr: number[], start: number, end: number) {
        if (start >= end) return;
        const mid = partion(arr, start, end);

        _quickSort2(arr, start, mid - 1);
        _quickSort2(arr, mid + 1, end);
    }

    function partion(arr: number[], start: number, end: number) {
        let key = arr[start]
        let left = start;
        let right = end;

        while (left < right) {
            while (left < right && arr[--right] >= key)
            while (left < right && arr[++left] <= key);
            if (left !== right) {
                [arr[left], arr[right]] = [arr[right], arr[left]]
            }
        }
        [arr[start], arr[left]] = [arr[left], key]

        return left;
    }
    console.log(arr);
}

quickSort2([1,3,6,3,4,5,6,7]);


// 非递归

function quickSort3(arr: number[]) {

    let left = 0;
    let right = arr.length - 1;

    let queue: [number, number][] = [[left, right]]
    while (queue.length !== 0) {
        const range = queue.pop();
        const mid = partition(arr, range![0], range![1]);

        if (mid - range![0] > 0) {
            queue.push([range![0], mid - 1])
        }
        if (range![1] > mid + 1) {
            queue.push([mid + 1, range![1]])
        }
    }

    function partition(arr: number[], start: number, end: number) {
        let pivot = arr[start]
        let left = start;
        let right = end;

        while (left < right) {
            while (left < right && arr[right] >= pivot) right--;
            while (left < right && arr[left] <= pivot) left++;

            if (left !== right) {
                [arr[left],arr[right]] = [arr[right],arr[left]]
            }
        }

        [arr[start], arr[left]] = [arr[left], pivot]

        return left;
    }

    console.log(arr);
}