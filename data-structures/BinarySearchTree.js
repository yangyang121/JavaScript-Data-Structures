class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    const newNode = new Node(key)
    const insertNode = (node, newNode) => {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }

    if (this.root === null) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }

  // 中序遍历：从小到大遍历
  inOrderTraverse(callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
      }
    }

    inOrderTraverseNode(this.root, callback)
  }

  // 先序遍历：以优先于后代节点的顺序访问每个节点
  preOrderTraverse(callback) {
    const preOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }

    preOrderTraverseNode(this.root, callback)
  }

  // 后序遍历：先访问后代节点再访问节点本身
  postOrderTraverse(callback) {
    const postOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
      }
    }

    postOrderTraverseNode(this.root, callback)
  }

  min() {
    const minNode = node => {
      return node ? (node.left ? minNode(node.left) : node.key) : null
    }
    minNode(this.root)
  }

  max() {
    const maxNode = node => {
      return node ? (node.right ? maxNode(node.right) : node.key) : null
    }
    maxNode(this.root)
  }

  search(key) {
    const searchNode = (node, key) => {
      if (node === null) return false
      if (node.key === key) return node
      searchNode(key < node.key ? node.left : node.right, key)
    }
    searchNode(this.root, key)
  }

  maxDepth() {
    const maxDepthNode = node => {
      if (node === null) return 0
      return 1 + Math.max(maxDepthNode(node.left), maxDepthNode(node.right))
    }
    return this.root === null
      ? 0
      : 1 +
          Math.max(maxDepthNode(this.root.left), maxDepthNode(this.root.right))
  }

  minDepth() {
    const minDepthNode = node => {
      if (node === null) return 0
      return 1 + Math.min(minDepthNode(node.left), minDepthNode(node.right))
    }
    return this.root === null
      ? 0
      : 1 +
          Math.min(minDepthNode(this.root.left), minDepthNode(this.root.right))
  }
}
