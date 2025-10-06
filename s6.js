//Create a Set with ["apple", "banana", "mango"]. Check if "banana" exists. 

let fruits=new Set(["apple","banana","mango"])

console.log(fruits.has("banana"))

//Create a Map with {id:1,name:"Alice"} and check if the key "name" exists.
const data = new Map([['id', 1], ['name', "Alice"]]);

console.log(data.has("name"))