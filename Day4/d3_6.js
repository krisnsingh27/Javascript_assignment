// Using the `person` object, print:
//  `"Hello, my name is John Doe and I am 25 years old."`

// (use template literals and `getFullName()` method).


let person={
    fname:"krisn",
    lname:"ranjan",
    age:22,
    getFullNmae:function(){
        return `Hello my name is ${this.fname} ${this.lname } and i am ${this.age} years old`
    }

}
console.log(person.getFullNmae())