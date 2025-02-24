// Numbers are fun! Write a generator function fibonacciGenerator(limit) that yields Fibonacci numbers up to a specified limit. Remember, the first two 
// Fibonacci numbers are 0 and 1, and each subsequent number is the sum of the previous two.

function* fibonacciGenerator(limit){
  let first = 0;
  let second = 1;
  let next = 0;

  yield 0;
  yield 1
  for(let i = 2; i <= limit; i++){
    yield next = first + second;
    first = second;
    second = next;
  }
}

const generator = fibonacciGenerator(6);
for(const num of generator){
    console.log(num);
}
// console.log(generator.next().value)
// console.log(generator.next().value);
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
0
1
1
2
3
5
8
13
21