import { BSNode } from "./BSNode";

export class BinarySearchTree<NodeValue_Type> {
  root: BSNode<NodeValue_Type> | null;

  constructor() {
    this.root = null;
  }

  insert(value: NodeValue_Type) {
    const newNode = new BSNode<NodeValue_Type>(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: BSNode<NodeValue_Type>, newNode: BSNode<NodeValue_Type>) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value: NodeValue_Type): BSNode<NodeValue_Type> | null {
    if (this.root === null) {
      return null;
    }

    return this.searchNode(this.root, value);
  }

  searchNode(node: BSNode<NodeValue_Type> | null, value: NodeValue_Type): BSNode<NodeValue_Type> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    }

    return node;
  }

  remove(value: NodeValue_Type) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node: BSNode<NodeValue_Type> | null, value: NodeValue_Type) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else if (node.left === null && node.right === null) {
      return null;
    } else if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    } else {
      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
    }

    return node;
  }

  findMinNode(node: BSNode<NodeValue_Type>): BSNode<NodeValue_Type> {
    if (node.left === null) {
      return node;
    }

    return this.findMinNode(node.left);
  }

  breadthFirstSearch(): Set<BSNode<NodeValue_Type>> {
    if (this.root === null) {
      return new Set();
    }

    const queue: BSNode<NodeValue_Type>[] = [];
    const visited: Set<BSNode<NodeValue_Type>> = new Set();

    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode) {
        visited.add(currentNode);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }

    return visited;
  }

  depthFirstSearchPreOrder(): Set<BSNode<NodeValue_Type>> {
    const visited: Set<BSNode<NodeValue_Type>> = new Set();

    this.depthFirstSearchPreOrderNode(this.root, visited);

    return visited;
  }

  depthFirstSearchPreOrderNode(node: BSNode<NodeValue_Type> | null, visited: Set<BSNode<NodeValue_Type>>) {
    if (node === null) {
      return;
    }

    visited.add(node);
    if (node.left) {
      this.depthFirstSearchPreOrderNode(node.left, visited);
    }
    if (node.right) {
      this.depthFirstSearchPreOrderNode(node.right, visited);
    }
  }

  depthFirstSearchPostOrder(): Set<BSNode<NodeValue_Type>> {
    const visited: Set<BSNode<NodeValue_Type>> = new Set();

    this.depthFirstSearchPostOrderNode(this.root, visited);

    return visited;
  }

  depthFirstSearchPostOrderNode(node: BSNode<NodeValue_Type> | null, visited: Set<BSNode<NodeValue_Type>>) {
    if (node === null) {
      return;
    }

    if (node.left) {
      this.depthFirstSearchPostOrderNode(node.left, visited);
    }
    if (node.right) {
      this.depthFirstSearchPostOrderNode(node.right, visited);
    }

    visited.add(node);
  }

  depthFirstSearchInOrder(): Set<BSNode<NodeValue_Type>> {
    const visited: Set<BSNode<NodeValue_Type>> = new Set();

    this.depthFirstSearchInOrderNode(this.root, visited);

    return visited;
  }

  depthFirstSearchInOrderNode(node: BSNode<NodeValue_Type> | null, visited: Set<BSNode<NodeValue_Type>>) {
    if (node === null) {
      return;
    }

    if (node.left) {
      this.depthFirstSearchInOrderNode(node.left, visited);
    }

    visited.add(node);

    if (node.right) {
      this.depthFirstSearchInOrderNode(node.right, visited);
    }
  }
}