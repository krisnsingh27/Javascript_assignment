//From [1,2,3,4,5,6], extract numbers from index 2 to 4.  

let numbers=[1,2,3,4,5,6]

console.log(numbers.slice(2,4))


//Copy the last 3 elements of an array without modifying the original.

let newnumbers=numbers.slice(3)
console.log(newnumbers)

//From [10,20,30,40,50], remove the element at index 2.
let arr=[10,20,30,40,50]

arr.splice(2,1)
console.log(arr)


//Insert "hello" and "world" at index 1 of [1,2,3].

let num=[1,2,3]
num.splice(1,0,"hello","world")

console.log(num)

//Remove the first element from ["red", "green", "blue"].

let color=["red","green","blue"]

color.shift()
console.log(color)

//Add "yellow" to the beginning of ["apple", "banana"].

color.unshift("yellow")
console.log(color)

//Add "grapes" to the end of ["apple", "banana"].  

let fruits=["apple","banana"]

fruits.push("grapes")
console.log(fruits)

//Remove the last element of ["pen", "pencil", "eraser"].

let words=["pen","pencil","eraser"]

words.pop()
console.log(words)