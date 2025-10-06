// // // const single = 'Single quotes';
// // // const double = "Double quotes";
// // // const backtick = `Backtick`;

// // // console.log(single);
// // // console.log(double);
// // // console.log(backtick);

// // // const random = ["tree", 795, [0, 1, 2]];
// // // console.log(random[2][2]);

// // // const a  = (a,b,...rest) => {
// // //     console.log(a, rest );
    
// // // }
// // // a(1,2,3,[4,8])

// // // //1 [3,[4,8]]

// // // let arr=[1.,2,3,4]
// // // arr.shift().pop()
// // // console.log(arr)

// // // let name=["krisn","kumar","singh"]
// // // name[0] = name[0].toUpperCase()
// // // console.log(name)
// //     class Vehicle {
// //       drive() {
// //         console.log("Driving a vehicle.");
// //       }
// //     }

// //     class Car extends Vehicle {
// //       drive() {
// //         console.log("Driving a car."); // Overrides the parent's drive method
// //       }
// //     }

// //     const myCar = new Car();
// //     myCar.drive(); // Driving a car.

// //     let a=new Set(["e","b","c","d","e"])
// //     console.log(a)

// //     let set=new Set()
// //     console.log(set)
// //     set.add(1)
// //     set.add(2)
// //     set.add(3)
// //     console.log(set);
    

// let s1={
//   a:1,
//   b:2

// }

// let s2={
//   c:3,
//   d:6
// }
// let merge=Object.assign(s2,s1)
// console.log(merge)
// console.log(s1)
// console.log(s2)


// // let arr=[1,2,3,4,5]

// // let arr1=arr.shift().pop()
// // console.log(arr1)


// console.log([] + []);      
// console.log([] + {});     
// console.log({} + []);     

// console.log({} + {});     

const person = {
  name: "John",
  greet: function() {
    console.log(this.name);
  }
};

// const greet = person.greet;
// greet(); // What gets logged?

person.greet();

