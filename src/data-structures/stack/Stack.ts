import { SinglyLinkedList } from "../singly-linked-list/SinglyLinkedList";

export class Stack<NodeValue_Type> {
  private stack: SinglyLinkedList<NodeValue_Type>;

  constructor() {
    this.stack = new SinglyLinkedList<NodeValue_Type>();
  }

  push(value: NodeValue_Type): number {
    this.stack.unshift(value);
    return this.stack.length;
  }

  pop(): NodeValue_Type | undefined {
    const removedNode = this.stack.shift();
    return removedNode?.value;
  }

  peek(): NodeValue_Type | undefined {
    return this.stack.get(0)?.value;
  }

  size(): number {
    return this.stack.length;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}