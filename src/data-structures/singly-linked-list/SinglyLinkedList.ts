import { SLLNode } from "./SLLNode";

export class SinglyLinkedList<NodeValue_Type> {
  head: SLLNode<NodeValue_Type> | null;
  tail: SLLNode<NodeValue_Type> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: NodeValue_Type): SinglyLinkedList<NodeValue_Type> {
    const newNode = new SLLNode<NodeValue_Type>(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop(): SLLNode<NodeValue_Type> | undefined {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift(): SLLNode<NodeValue_Type> | undefined {
    if (!this.head) return undefined;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(value: NodeValue_Type): SinglyLinkedList<NodeValue_Type> {
    const newNode = new SLLNode<NodeValue_Type>(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index: number): SLLNode<NodeValue_Type> | undefined | null {
    if (index < 0 || index >= this.length) return undefined;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current!.next;
      counter++;
    }

    return current;
  }

  set(index: number, value: NodeValue_Type): boolean {
    const foundNode = this.get(index);

    if (!foundNode) return false;

    foundNode.value = value;

    return true;
  }

  insert(index: number, value: NodeValue_Type): boolean {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new SLLNode<NodeValue_Type>(value);

    const prev = this.get(index - 1);
    const temp = prev!.next;
    prev!.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  remove(index: number): SLLNode<NodeValue_Type> | undefined | null {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = prev!.next;
    prev!.next = removed!.next;
    this.length--;

    return removed;
  }

  reverse(): SinglyLinkedList<NodeValue_Type> {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  rotate(k: number): SinglyLinkedList<NodeValue_Type> {
    const trueN = ((k % this.length) + this.length) % this.length;

    if (trueN === 0 || this.length < 2) return this;

    let count = 0;
    let cur = this.tail;
    this.tail!.next = this.head;

    while (count < trueN) {
      cur = cur!.next;
      count++;
    }

    this.tail = cur;
    this.head = cur!.next;
    this.tail!.next = null;

    return this;
  }

  print(): void {
    const arr: NodeValue_Type[] = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    // console.log(arr);
  }
}
