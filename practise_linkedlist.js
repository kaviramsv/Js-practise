// //Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// const sums = (arr, target) => {
//   let final = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         console.log(([i, j]))
//         return [i, j]
//       }
//     }
//   }
// }

// sums([2, 7, 11, 15], 9);

// const diagonal = (matrix) => {

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       console.log(matrix[i][j]);
//       if (i !== j && matrix[i][j] !== 0) {
//         return "not diagonal"
//       }
//     }
//   }
//   return "diagonal"

// }

// console.log(diagonal([[1, 0, 0], [0, 2, 0], [0, 2, 3]]))

// const identical = (matrix) => {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if ((i !== j && matrix[i][j] !== 0) || (i === j && matrix[i][j] !== 1)) {
//         return "not identical";
//       }
//     }
//   }
//   return "identical";
// }
// console.log(identical([[1, 0, 0], [2, 1, 0], [0, 0, 1]]))

// const palindrome = (str) => {

//   console.log(str === str.split("").reverse().join(""));
// }

// palindrome("mam");

// const fibonocci = (n) => {
//   let n1 = 0;
//   let n2 = 1;
//   let final = [];
//   let sum = 0;
//   final.push(n1);
//   final.push(n2);
//   for (let i = 2; i < n; i++) {
//     sum = n1 + n2;
//     final.push(sum);
//     n1 = n2;
//     n2 = sum;
//   }
//   console.log(final);
// }
// fibonocci(9);
// const primeCheck = (num) => {
//   let flag = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       console.log(num, i, num % i);
//       flag = false;
//     }
//   }
//   console.log((flag))
//   return flag;

// }

// primeCheck(6);
// primeCheck(7);

// const primeGen = (num) => {
//   let ct = 0;
//   let final = [];
//   let div = 0;
//   for (let i = 2; ct < num; i++) {
//     div = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         div += 1;
//       }
//     }
//     if (div <= 2) {
//       final.push(i);
//       ct++
//         ;
//     }
//   }
//   return final;
// }
// console.log(primeGen(55))

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  insertTail(data) {
    let current = this.head;
    let node = new Node(data);
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }
  insertAt(index, data) {
    let prev;
    let node = new Node(data);
    let count = 0;
    let current = this.head;
    while (count < index) {
      prev = current;
      count++;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
    this.size++
  }
  getAt(ind) {
    let current = this.head;
    let count = 0;
    while (count < ind) {
      count++;
      current = current.next;
    }
    console.log(current.data);
    return current.data;
  }
  removeAt(index) {
    let current = this.head;
    let count = 0;
    let prev;
    if (index === 0) {
      this.head = current.next;
      this.size--;
    }
    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = current.next;
    this.size--;
  }
  clearList() {
    this.head = null;
    this.size = 0;
  }
  removeFirst() {
    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
let ll = new LinkedList();
ll.insertHead(60);
ll.insertHead(50);
ll.insertTail(70);
ll.insertAt(3, 20)
// ll.printList();
// ll.getAt(1);
ll.removeAt(1);
ll.removeAt(2);
ll.removeFirst();
ll.printList();