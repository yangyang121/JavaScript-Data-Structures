// 冒泡排序算法的复杂度是 O(n²)，并不推荐此算法
let temp = null
const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}
