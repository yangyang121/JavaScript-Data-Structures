// 单向链表节点
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// 单向链表
class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(element) {
    const node = new Node(element)
    let current = null
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = node
        node.next = current
      }
      this.length++
      return true
    }
    return false
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let index = 0
      let current = this.head
      let previous = null
      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
      return current
    }
    return null
  }

  findIndex(element) {
    let index = -1
    let current = this.head
    while (++index < this.length) {
      if (current.element === element) return index
      current = current.next
    }
    return -1
  }

  remove(element) {
    const index = this.findIndex(element)
    return this.removeAt(index)
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  toString() {
    let current = this.head
    let string = ""
    while (current) {
      string += ` ${current.element}`
      current = current.next
    }
    return string
  }
}
