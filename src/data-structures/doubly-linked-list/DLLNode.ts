export class DLLNode<NodeValue_Type> {
  value: NodeValue_Type;
  next: DLLNode<NodeValue_Type> | null;
  prev: DLLNode<NodeValue_Type> | null;

  constructor(value: NodeValue_Type) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
