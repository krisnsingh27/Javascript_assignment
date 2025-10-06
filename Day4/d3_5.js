// * Create a new object `newUser` by copying all properties of `user` and adding a new property `role = "admin"`.
// * Write a function `sum(...numbers)` that accepts any number of arguments and returns their sum.

//  Example:

// ```js
// sum(1, 2, 3, 4); // 10
// ```

let user={
    id:1,
    name:"krisn",
    email:"krisn@gmail.com",
    address:{
        city:"indore",
        zip:123
    }
}

user.role='admin'

let newuser={...user}
console.log(newuser)

const numbers = [1, 2, 3, 4, 5];

function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

const result = sum(...numbers);
console.log(result);  

