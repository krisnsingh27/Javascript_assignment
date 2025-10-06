// Create an object `student` with properties:

// ```js
// const student = { name: "Alice", age: 22, grade: "A" };
// ```

//  **Tasks:**

// * Use **for…in** to print all keys.
// * Use `Object.values()` to print all values.
// * Use `Object.entries()` with **for…of** loop to print key-value pairs.


let students={
    name:"Alice",
    age:22,
    grade:"A"
}

for(let key in students){
    console.log(`"key" is ${key}`)
}

let val=Object.values(students)
console.log(val)

for(const[key,values] of Object.entries(students)){
    console.log(`${key}:${values}`)
}

