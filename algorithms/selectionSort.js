// 选择排序：找到最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推
const selectionSort = arr => {
  let indexMin = 0
  let temp = null
  for (let i = 0; i < arr.length; i++) {
    indexMin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    if (indexMin !== i) {
      temp = arr[indexMin]
      arr[indexMin] = arr[i]
      arr[i] = temp
    }
  }
}
