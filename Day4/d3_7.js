// Write a function `greet(name = "Guest")` that prints:
//  `"Hello, <name>!"`

// Example:

// ```js
// greet();        // "Hello, Guest!"
// greet("Nitin"); // "Hello, Nitin!"
// ```

function greet(name="guest"){
    return `hello ${name}`
}
console.log(greet())
console.log(greet("krisn"))

