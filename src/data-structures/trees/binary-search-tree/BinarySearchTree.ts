import { BSNode } from "./BSNode";

export class BinarySearchTree<NodeValue_Type> {
  root: BSNode<NodeValue_Type> | null;

  constructor() {
    this.root = null;
  }

  insert(value: NodeValue_Type) {
    const newNode = new BSNode(value);

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

}