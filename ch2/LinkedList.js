export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// add(), insertAt(), removeFrom(), removeElement();
export class LinkedList {
  // if head is not passed, it is initialized to null
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let curr;

    if (!this.head) {
      this.head = node;
    } else {
      curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  // 1 -> 2 -> ?
  insertAt(element, location) {
    if (location > this.size) return false;
    let node = new Node(element);
    let curr = this.head;
    let prev;
    let x = 0;
    if (location == this.size) {
      this.add(element);
      return true;
    }
    if (location == 0) {
      node.next = this.head;
      this.head = node;
      return true;
    }
    while (x < location) {
      prev = curr;
      curr = curr.next;
      x++;
    }
    prev.next = node;
    node.next = curr;
    this.size++;
    return true;
  }
  removeFrom(location) {
    if (location > this.size) return false;

    let curr = this.head;
    let prev;
    let it = 0;
    if (location == 0) {
      this.head = curr.next;
      this.size--;
      return true;
    }
    while (it < location) {
      prev = curr;
      curr = curr.next;
      it++;
    }
    if (curr.next != null) {
      prev.next = curr.next;
    } else {
      prev.next = null;
    }
    this.size--;
    return true;
  }
  removeElement(element) {
    let curr = this.head;
    let prev;
    if (curr.data == element) {
      this.head = curr.next;
      return true;
    }
    while (curr.data != null) {
      if (curr.data == element) {
        prev.next = curr.next;
        this.size--;
        return true;
      }
      prev = curr;
      curr = curr.next;
    }
    return false;
  }

  isEmpty() {
    return this.size === 0;
  }

  listsize() {
    return this.size;
  }

  display() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.data + " ";
      curr = curr.next;
    }
    return str;
  }
}
