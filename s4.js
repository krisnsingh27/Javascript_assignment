//Find the length of ["java", "python", "js", "c++"].

let subject=["java","python","js","c++"]
console.log(subject.length)

//use .length to get the last element of [100,200,300,400].

let num=[100,200,300,400]

console.log(num[num.length-1])


//From ["dog", "cat", "rabbit", "dog"], find the first occurrence index of "dog".

let animal=["dog","cat","rabbit","dog"]

console.log(animal.indexOf("dog"))

//Check what index "lion" would return in the same array.

console.log(animal.indexOf("lion"))

//Flatten the array [1, [2, 3], [4, [5, 6]]] just one level deep. 

let arr=[1, [2, 3], [4, [5, 6]]] 

console.log(arr.flat())
//Fully flatten [1, [2, [3, [4]]]].

let numarr=[1, [2, [3, [4]]]]
console.log(numarr.flat(Infinity))