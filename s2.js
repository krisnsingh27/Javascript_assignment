//From an array of numbers [12, 5, 8, 130, 44], return only the numbers greater than 10.

let arr=[12,5,8,130,44]

let newarr=arr.filter(n=>n>20)
console.log(newarr)

//From an array of words ["cat", "elephant", "dog", "tiger"], filter out words shorter than 4 letters.

let words=["cat","elephant","dog","tiger"]

let newwords=words.filter(n=>n.length>4)
console.log(newwords)

//Given [1, 2, 3, 4], create a new array with the squares of each number.

let num=[1,2,3,4]
let newnum=num.map(n=>n*n)
console.log(newnum)

//Convert an array of names ["alice", "bob", "charlie"] into uppercase.

const name=["alice","bob","charlie"]

let newname=name.map(n=>n.toUpperCase())
console.log(newname)


//Find the sum of numbers in [3, 7, 2, 9]. 

let number=[3,7,2,9]

let newnumber=number.reduce((acc,curr)=>acc+curr,0)
console.log(newnumber)


//Find the product of all numbers in [2, 3, 4].  

let numbers=[2,3,4]
let newnumbers=numbers.reduce((acc,curr)=>acc*curr,1)
console.log(newnumbers)

//Count how many times each word appears in ["apple", "banana", "apple", "orange", "banana", "apple"].

let countwords=["apple","banana","apple","orange","banana","apple"]

let newcountwords=countwords.reduce((acc,curr)=>acc,curr+1,0)
console.log(newcountwords)