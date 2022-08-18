var array1 = [4,8,9,10];
var array2 = [4,9,8,10];
var array3 = array2.sort((a,b) => a-b);
console.log(array3);
var is_same = (array1.length == array2.length) && array1.every(function(element, index) {
    return element === array2[index]; 
});

console.log(is_same);