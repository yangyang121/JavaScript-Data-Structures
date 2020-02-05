// 暗黑的字符串  https://mp.weixin.qq.com/s/XsUhTDUxxww-QFyDhH63Bg
const fn = str => {
  let result = 0
  let arr = []

  for (let i = 0; i < str.length; i++) {
    arr.push(str[i])
    if (arr.length !== Array.from(new Set(arr)).length) {
      arr = [str[i]]
    } else if (arr.length === 3) {
      arr = []
      result++
    }
  }

  return result
}

console.log(fn("BAACBACCBAAA"))
console.log(fn("AABBCCAABB"))
console.log(fn("ABCCAABBC"))
