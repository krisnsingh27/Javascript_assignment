// Take an array of student marks [45, 67, 89, 34, 56].  
//   1. Filter students who scored above 50.  
//   2. Sort them in descending order.  
//   3. Find the average marks.  

let arr=[45,67,89,34,56]

let newarr=arr.filter(n=>n>50)
console.log(newarr) 

newarr.sort()
newarr.reverse()
console.log(newarr)

let sum=newarr.reduce((acc,curr)=>acc+curr,0)

let avg=sum/newarr.length

console.log(avg)