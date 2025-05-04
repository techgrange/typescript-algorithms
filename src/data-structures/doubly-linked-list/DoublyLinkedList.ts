import { DLLNode } from "./DLLNode";

export class DoublyLinkedList<NodeValue_Type> {
  head: DLLNode<NodeValue_Type> | null;
  tail: DLLNode<NodeValue_Type> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: NodeValue_Type): DoublyLinkedList<NodeValue_Type> {
    const newNode = new DLLNode<NodeValue_Type>(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop(): DLLNode<NodeValue_Type> | undefined | null {
    if (!this.head) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode!.prev;
      this.tail!.next = null;
      poppedNode!.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  shift(): DLLNode<NodeValue_Type> | undefined | null {
    if (!this.head) return undefined;

    const shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode!.next;
      this.head!.prev = null;
      shiftedNode!.next = null;
    }

    this.length--;

    return shiftedNode;
  }

  unshift(value: NodeValue_Type): DoublyLinkedList<NodeValue_Type> {
    const newNode = new DLLNode<NodeValue_Type>(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index: number): DLLNode<NodeValue_Type> | undefined | null {
    if (index < 0 || index >= this.length) return undefined;

    let currentNode;
    if (index <= this.length / 2) {
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode!.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode!.prev;
      }
    }

    return currentNode;
  }

  set(index: number, value: NodeValue_Type): boolean {
    const foundNode = this.get(index);
    if (!foundNode) return false;

    foundNode.value = value;
    return true;
  }

  insert(index: number, value: NodeValue_Type): boolean {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new DLLNode<NodeValue_Type>(value);
    const prevNode = this.get(index - 1) as DLLNode<NodeValue_Type>;
    const nextNode = prevNode!.next;

    prevNode!.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode!.prev = newNode;

    this.length++;

    return true;
  }

  remove(index: number): boolean {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const deletedNode = this.get(index) as DLLNode<NodeValue_Type>;
    const prevNode = deletedNode!.prev;
    const nextNode = deletedNode!.next;

    prevNode!.next = nextNode;
    nextNode!.prev = prevNode;

    deletedNode!.next = null;
    deletedNode!.prev = null;

    this.length--;

    return true;
  }

  reverse(): DoublyLinkedList<NodeValue_Type> {
    if (this.length <= 1) return this;

    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let nextNode = null;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode!.next;
      currentNode!.next = prevNode;
      currentNode!.prev = nextNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }
}