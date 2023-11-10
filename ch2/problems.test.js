import * as ll from "./LinkedList.js";
import * as fn from "./problems.js";

describe("Q1. Remove dups", () => {
  const list = new ll.LinkedList();
  list.add(1);
  list.add(1);
  list.add(2);
  list.add(2);
  list.add(3);
  fn.removeDup(list);

  expect(list.display()).toBe("1 2 3");
});

describe("Q2. Return Kth to Last", () => {});
