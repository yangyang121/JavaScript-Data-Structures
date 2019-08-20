class PriorityQueue {
  constructor() {
    this.items = []
  }

  enqueue(element, priority) {
    const priorityElement = { element, priority }
    const findIndex = this.items.findIndex(item => item.priority < priority)
    if (this.items.length === 0 || findIndex === -1) {
      this.items.push(priorityElement)
    } else {
      this.items.splice(findIndex, 0, priorityElement)
    }
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

  clear() {
    this.items = []
  }
}
