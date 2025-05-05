import { SinglyLinkedList } from "../singly-linked-list/SinglyLinkedList";

export class Queue<NodeValue_Type> {
  private queue: SinglyLinkedList<NodeValue_Type>;

  constructor() {
    this.queue = new SinglyLinkedList<NodeValue_Type>();
  }

  enqueue(value: NodeValue_Type): number {
    this.queue.push(value);
    return this.queue.length;
  }

  dequeue(): NodeValue_Type | undefined {
    return this.queue.shift()?.value;
  }
}