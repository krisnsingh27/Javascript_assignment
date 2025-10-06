// Create an object `person` with properties:

// * `firstName`, `lastName`, `age`
// * Method `getFullName()` → returns full name using `this`.

// 👉 Example Output:

// ```js
// console.log(person.getFullName()); // "John Doe"


let person={
    firstname:'krisn',
    lastname:'ranjan',
    age:22,
    getfullNmae:function(){
        return `${this.firstname} ${this.lastname}`
    }
}
console.log(person.getfullNmae())