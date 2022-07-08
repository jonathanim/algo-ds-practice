class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //insert at the end
  push(value) {
    let node = new Node(value);

    if (this.head == null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //removes at the end
  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return this.current;
  }
  //remove at head (beginning of linkedlist)
  shift() {
    if (!this.head) {
      return undefined;
    }
    let removed = this.head;

    this.head = removed.next;
    this.length--;
    return removed;
  }
  //add at before head (beginning of linkedlist)
  unshift(value) {
    let newNode = new Node(value);
    let currentHead = this.head;

    this.head = newNode;
    this.head.next = currentHead;

    return this;
  }
}

let ll = new LinkedList();

ll.push("henry");
ll.push("harriot");
ll.push("james");
ll.push("dan");
ll.push("jon");
ll.unshift("tyson");

console.log(ll);
