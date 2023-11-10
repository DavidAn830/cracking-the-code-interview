import * as ll from "./LinkedList.js";

// write code to remove duplicates from an unsorted linked list
export const removeDup = (list) => {
  let curr = list.head;
  let it = 0;
  const map = {};
  while (curr.next) {
    if (map[curr.data]) {
      console.log("hit");
      list.removeFrom(it);
      console.log(list.display(), curr.data);
      it--;
    }
    map[curr.data] = 1;
    it++;
  }
  return true;
};

// implement an algorithm to find the kth to last element of a singly linked list.
export const trimList = (k, list) => {
  let sublist = "";
  let add = false;
  let curr = list.head;
  let it = 0;
  while (curr.next) {
    if (add) {
      sublist += curr.data;
    } else {
      if (it === k) sublist = true;
      it++;
    }
  }
};

const list = new ll.LinkedList();
list.add(1);
list.add(1);
list.add(2);
list.add(2);
list.add(3);
list.display();
