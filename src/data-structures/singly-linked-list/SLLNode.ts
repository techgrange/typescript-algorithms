export class SLLNode<NodeValue_Type> {
  value: NodeValue_Type;
  next: SLLNode<NodeValue_Type> | null;

  constructor(value: NodeValue_Type) {
    this.value = value;
    this.next = null;
  }
}
