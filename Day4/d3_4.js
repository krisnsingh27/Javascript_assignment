// Given object:

// ```js
// const user = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
//   address: { city: "New York", zip: 10001 }
// };
// ```

//  **Tasks:**

// * Extract `name` and `email` into variables.
// * Extract `city` into a variable using **nested destructuring**.

const user={
    id:1,
    name:"krisn",
    email:"krisn@gmail.com",
    address:{
        city:"indore",
        zip:123
    }
}

// const { name:{fname}, email:{femail} } = user
// console.log(fname, femail)
// fname=user.name
// femail=user.email
const {name:fname,email:femail}=user
console.log(fname,femail)

const {address:{city:fcity}}=user
console.log(fcity)