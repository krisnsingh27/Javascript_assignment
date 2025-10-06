// Create a class `Animal` with:

// * property: `name` (from constructor)
// * method: `speak()` → prints `"<name> makes a sound"`

//  Example:

// ```js
// const dog = new Animal("Dog");
// dog.speak(); // "Dog makes a sound"


class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} makes a sound`)
    }
}
const n = new Animal("Dog")
n.speak()

// Extend `Animal` class to `Dog`:

// * add a method `speak(sound = "Bark")` → prints `"<name> says Bark"`.

//  Example:

// ```js
// const puppy = new Dog("Puppy");
// puppy.speak();       // "Puppy says Bark"
// puppy.speak("Woof"); // "Puppy says Woof"

class Dog extends Animal {
    speak(sound = "bark") {
        console.log(`${this.name} says ${sound}`)
    }
}
const puppy = new Dog("Puppy")
puppy.speak();
puppy.speak("woof")

