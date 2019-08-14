class LoopQueue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length === 0
  }

  find(index) {
    return !this.isEmpty() ? this.items[index % this.size()] : null
  }

  clear() {
    this.items = []
  }
}
