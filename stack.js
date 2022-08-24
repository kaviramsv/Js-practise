class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  pushItem(data) {
    this.items[this.count] = data;
    this.count++;
  }
  pop() {
    let item = this.items[this.count];
    this.items[this.count] = null;
    this.count--;
    return item;

  }
  printItems() {
    console.log(this.items.toString());
  }
}
let st1 = new Stack();
st1.pushItem(5);
st1.pushItem(6);
st1.pushItem(7);
st1.pushItem(8);
st1.printItems();
st1.pop();
st1.printItems();
