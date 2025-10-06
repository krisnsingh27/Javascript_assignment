const students = [
  { name: "Alice", marks: 40 },
  { name: "Bob", marks: 65 },
  { name: "Charlie", marks: 80 }
];
// 1. Print names of students who scored more than 50
for(let i=0;i<students.length;i++){
  if(students[i].marks>50){
    console.log(students[i].name)
  }
}
// 2. Use a do...while loop to keep adding 5 to a score until it reaches 100

let score = 0;

do {
  console.log("Current score:", score);
  score += 5;   
} while (score <= 100);



/*{
  var a=100
  let b=30
  const c=20
}
console.log(a)//100
console.log(b)//reference erroe
console.log(c)//reference error*/
//var is a functional scoped thatswhy it is accessed outside block and let and const is a block scoped thats why it is not accessed outside the block.


//Rewrite the code so that all three variables can be used outside the block without errors.
var a=90
let b=70
const c=10
console.log(a)//90
console.log(b)//70
console.log(c)//10


let x = 7;
let y = 3;
console.log(x % y);    //1
console.log(x > y && y > 0);  //true
console.log(x < y || y > 0);  //true
console.log(!(x === y)); //true

//Explain the difference between `&&` and `||`.

//ans.&& returns true if both are true
//ans.|| returns true if atleat are true

//Why does `!(x === y)` return true here?
//ans. === is used to check content and type both here 7 and 3 are not equal so it returns false and we know that the inverse of false is true.

const nums = [2, 4, 6, 8, 10];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2);
}

// it will print 4,8,12,16,20

//Rewrite the loop so it prints only odd numbers from 1 to 10.
let n1=10
for(let i=1;i<=n1;i++){
  if(i%2!=0){
    console.log(i)
  }
}


let n = 1;
do {
  console.log("Number:", n);
  n++;
} while (n <= 5);


//the loop will run 5 times
console.log("*******************************")
let n2= 10;
do {
  console.log("Number:", n2);
  n++;
} while (n2<= 5);





const text = "Hello World";
console.log(text.charAt(0));     
console.log(text[6]);           
console.log(text.substring(0, 5)); 
console.log(text.split(" "));    
console.log(`Message: ${text}`); 

// What does `charAt(0)` return?
//ans. it will return 'H'

//What’s the difference between `substring` and `slice`?
//substring doesn't accept negative indices and slice accepts negative indices

//What will `split(" ")` return?
//it will return [ 'Hello', 'World' ]

//Explain how string interpolation (using backticks `` ` ``) works.
//String interpolation means inserting variables or expressions inside a string dynamically.



//Loop numbers 1 to 20.  
for(let i=1;i<=20;i++){
  console.log(i)
}

console.log("*************************")
//Print `"Fizz"` for multiples of 3, `"Buzz"` for multiples of 5, `"FizzBuzz"` for multiples of both, else the number.


for(let i=1;i<=20;i++){
  if(i%3==0&&i%5==0){
    console.log("FizzBUZZ")
  }
  else if(i%5==0){
    console.log("BUZZ")
  }
  else if(i%3==0){
    console.log("FIZZ")
  }
  else{
    console.log(i)
  }
}
console.log("****************")


console.log(1 + "2");   //12  
console.log("2" * 3);     //6
console.log(0 == false);  //true
console.log(0 === false); //false
console.log([] == false); //true
//console.log([] ===false);//false

const num = 5;
const str = "5";
console.log(num == str);  //true
console.log(num === str); //false
console.log(`${num + 5} is greater than ${str}`); //10 is greater than 5



//== used type coercion and === dont use type coercion

//Why does `==` behave differently from `===`?
//== compares values with type coercion, while === compares values without type coercion (strict type + value match).


//In the last line, how does string interpolation handle numbers inside `${}`?
//String interpolation evaluates the expression inside ${} and then converts the result to a string before inserting it.



let x1 = 5;
let y1 = "5";

console.log(x1 == y1);  //true
console.log(x1 === y1); //false
console.log(x1 != y1);  //false
console.log(x1 !== y1); //true
console.log(x1 > 3);    //true
console.log(x1 < 10);   //true
console.log(x1 >= 5);   //true
console.log(x1 <= 4);   //false



/*sayHello();
console.log(x);
function sayHello() {
  console.log("Hello!");
}

var x= 5;
let y= 10;*/


//What happens with `sayHello()`?
// it will execute function and print hello


//What gets logged for `x`?
// it will print undefined

//What if you also add `console.log(y)` before declaration?
//it will print reference error
