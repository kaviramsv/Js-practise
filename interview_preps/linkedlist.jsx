class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insertfirst
  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //insertlast
  insertLast(data) {
    let newNode = new Node(data)

    if (!this.head) {
      this.head = newNode;
    } else {
      let ct = this.head;
      while (ct.next) {
        ct = ct.next;
      }
      ct.next = newNode;
    }
    this.size++;
  }

  //insertat index
  insertAt(ind, data) {
    let count = 0;
    let prev;
    let node = new Node(data);
    if (ind > 0 && ind > this.size) {
      return;
    }
    if (ind == 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let current = this.head;
    while (count < ind) {
      prev = current;
      count++;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
    this.size++;
  }


  //get at index

  getAt(ind) {

    let current = this.head;
    let count = 0;
    while (current) {
      if (count == ind) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  //remove at index

  // removeAt(ind){
  //   let current = this.head;
  //   let count = 
  //   while(count<index){

  //   }
  // }
  //clear list
  //print list
  printList() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

}

let ll = new LinkedList();
ll.insertHead(200);
ll.insertHead(100);
ll.insertLast(500);
// ll.printList();
ll.insertAt(2, 300); ll.printList();
ll.getAt(20);