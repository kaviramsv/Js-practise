class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  push(item) {
    this.items[this.count] = item;
    console.log(`item pushed to ${this.count}`);
    console.log(this.items);
    this.count++;
  }
  pop() {
    if (this.count === 0) {
      console.log("already empty");
      return;
    }
    console.log("deleted", this.items.splice(this.count - 1, 1));
    this.count--;
    console.log(this.items);

  }
  peek() {
    console.log(this.items[this.count - 1]);
  }

  isEmpty() {
    const check = this.count === 0 ? "empty" : "not empty";
    console.log(check);
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.peek();
stack.isEmpty();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.isEmpty();
stack.pop();