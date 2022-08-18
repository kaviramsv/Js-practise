// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


function find_sum(ar1, ar2) {
  let no1 = ar1.reverse().join("");

  let no2 = ar2.reverse().join("");
  
  let ans = Number(no1) + Number(no2);

  const arrayOfDigits = Array.from(String(ans), Number);

  console.log(arrayOfDigits);

}
find_sum([2, 4, 3], [5, 6, 4]);
find_sum([9,9,9,9,9,9,9],[9,9,9,9]);
