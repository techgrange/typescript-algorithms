export class BSNode<NodeValue_Type> {
  value: NodeValue_Type;
  left: BSNode<NodeValue_Type> | null;
  right: BSNode<NodeValue_Type> | null;

  constructor(value: NodeValue_Type) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
