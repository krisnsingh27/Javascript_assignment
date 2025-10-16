//What is JSX and why do we use it in React?
//Ans. jsx stand for javascript xml in react we simply embeded html code in javascript and with the help of jsx
//we make ui very easily.

//Explain the difference between a **component** and an **element** in React.
//Ans.An Element is an object that represents a DOM node it is a part of DOM structure, while a component is a reusable block of code that contains logic, states, and also returns the Element.

//What are **props** in React? Are they mutable or immutable?
//props are the properties which will pass from parent to child.it is immutable.

//What is the main difference between **state** and **props**?
//Ans.state are mutable means that through state we can change content on the ui,while props
//are immutable means that their value cannot changes and it is the property which is passed from parent to child.

//How do you update state in a React component?
//Ans. we update state in a react component through useState hook,it has two value one show on the ui and through another value we changes the first value with some operation.

//What is the significance of using **keys** in lists?
//Ans. The significance of keys is keys value are the unique value in list.


//Explain **conditional rendering** with an example.
//Ans. conditional rendering are like if-else in which if the first condition is true then the content in the first condition is shown on the ui
//and if the second condition is true then the value inside the second content is shown on the ui.

//Why do we use **arrow functions** in event handlers?
//Ans. arrow functions can help simplify code by automatically binding the context of this.

//What is the role of the `return` statement inside a functional component?
//Ans. In a React functional component, the return statement serves a crucial role by specifying the JSX (JavaScript XML) that the component will render.

//Write the syntax for passing and receiving props in a functional component.

//  function child(props){

//     return <h1>{props.name}</h1>
     
// }

//<child ="raj"> in the parent.

