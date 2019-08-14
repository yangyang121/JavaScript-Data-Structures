// 双向链表节点
class Node {
  constructor(element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

// 双向链表
class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(element) {
    const node = new Node(element)
    let current = this.tail
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      current.next = node
      node.prev = current
      this.tail = node
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
        if (this.head === null) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (position === this.length) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = node
        node.next = current
        current.prev = node
        node.prev = previous
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
        if (this.length === 1) {
          this.tail = null
        }
        this.head = current.next
        this.head.prev = null
      } else if (position === this.length - 1) {
        current = this.tail
        this.tail = current.prev
        this.head.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous
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
