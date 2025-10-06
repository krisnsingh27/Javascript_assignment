//Sort [40, 100, 1, 5, 25, 10] in ascending order.


let arr = [40, 100, 1, 5, 25, 10];
arr.sort((a, b) => a - b);
console.log(arr);


//Sort ["banana", "apple", "cherry"] alphabetically.
let fruits=["banana","apple","cherry"]
console.log(fruits.sort())

//Reverse [1,2,3,4,5]. 
let num=[1,2,3,4,5]
console.log(num.reverse())

//Reverse the characters of "hello" using split, reverse, and join.

let str="hello"

newstr=str.split('').reverse().join('')

console.log(newstr)

//Find the first number greater than 50 in [10, 20, 60, 40, 80]. 

let number=[10,20,60,40,80]

let newnumber=number.find(n=>n>50)
console.log(newnumber)

//Find the first word with more than 5 letters in ["cat", "elephant", "dog"].

let animal=["cat","elephant","dog"]
let newanimal=animal.find(n=>n.length>5)
console.log(newanimal)

//Return the last element of [1, 2, 3, 4, 5] using .at().  

let array=[1,2,3,4,5]
console.log(array.at(-1))

//Return the second-to-last element using .at().

console.log(array.at(-2))

