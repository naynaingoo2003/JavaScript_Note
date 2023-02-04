let nums = [1,2,3,4,5];
let numbers = [1,2,3,4,5,6,7];
//map()
let addOne = nums.map( constNumber => constNumber+1); // [2, 4, 6, 8, 10]
let finalNumber = addOne[nums.length-1];
//filter()
let x = numbers.filter( constX => !(constX%2) );
let y = numbers.filter( c => c%2 );
//reduce()
let nan = nums.reduce((n,a) =>n + a);

console.log(finalNumber);//6
console.log(addOne);// [2, 3, 4, 5, 6]
console.log(x); //[2, 4, 6]
console.log(y); // [1, 3, 5, 7]
console.log(nan); //15
