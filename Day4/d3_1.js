// Create an object `car` with properties:

// * `brand` = `"Toyota"`
// * `model` = `"Corolla"`
// * `year` = `2020`
// * `start` (method) → prints `"Car started"`

//  **Tasks:**

// * Access and print each property using dot notation.
// * Call the `start` method.

let car={
    brand:'Toyota',
    model:'corolla',
    year:'2020',
    start:function(){
        console.log("car started")
    }
}
console.log(car.brand)
console.log(car.model)
console.log(car.year)
car.start()


// ### **2. Object Manipulation (Add, Update, Delete)**

// Using the `car` object:

// * Add a property `color = "blue"`.
// * Update `year` to `2022`.
// * Delete `model`.

car.color="blue"

console.log(car.color)

car.year='2022'
console.log(car.year)

delete car.model
console.log(car.model)
