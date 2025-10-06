// // const str="hello world"

// // console.log(str.valueOf())

// // const str="     hello       "
// // console.log(str.trimStart())

// // let arr=[1,2,3,4,5]

// // console.log(arr.includes(3))

//let name="krisn ranjan"
//console.log(name.charAt(0).toUpperCase()+name.slice(1,5)+" "+name.charAt(6).toUpperCase()+name.slice(7))

// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(5, 2));
// // Expected output: 10

// console.log(multiply(5));
// Expected output: 5

// class Animal{
//     constructor(name,eat){
//         this.name=name
//         this.eat=eat
//     }
//     bark(){
//         console.log(`${this.name} eats ${this.eat}`)
//     }
// }
// const animal=new Animal("tony","grass")
// animal.bark()

// let arr=[1,2,3,4]
// let arr1=[5,6,7,8]
// console.log(...arr,...arr1)


// console.log(Math.max(...arr))

// console.log(Math.min(...arr1))

// let arr=[1,2,3]
// let[first,,third]=arr
// console.log(third)

// let arr=[1,2,3,4,5]
// console.log(arr.slice(0))

// console.log(arr.slice(-1))

// let str="hello world"
// console.log(str.slice(6))

// console.log(str.slice(0,10))


// let str="hello krisn"

// console.log(str.split('').reverse().join('')===str)


// let words=["jan","feb","mar","april"]
// console.log(words.length)

// console.log(null===0)

    // const originalArray = [1, 2, 3];
    // const copiedArray = [...originalArray];

    // console.log(copiedArray)

// function sayHi() {
//         console.log(this); // In browser (non-strict): window object; In strict: undefined
//     }
//     sayHi();

// function intro(name,age){
//     this.name=name
//     this.age=age
// }
// const p=new intro("krisn",22)
// console.log(p.name,p.age)

// function sayhello(name='krisn'){
//     console.log(name)
// }
// sayhello()
// sayhello("ranjan")

// let person={
//   name:"krisn",
//   age:22,
//   add:"siwan",
//   greeting:function(){
//     console.log(`hello ${this.name}`)
//   }
// }
// person.greeting()


let student={
    name:"krisn",
    age:22,
    address:{
        pincode:"841233",
        landmark:{
            lnumber:1
        }
    }
}

let {name:fname,age:fage,address:{pincode:fpincode,landmark:{lnumber:flnumber}}}=student
console.log(fname,fage,flnumber,fpincode)