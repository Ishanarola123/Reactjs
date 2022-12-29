import React  from "react";
//also we make an arrow function and its called as functional components
// function Greet(){
//     return <h1>Hello !I am Isha Narola!</h1>
// }
const Greet= props =>{
    console.log(props);
    return <h1>Hello !I am {props.name}!</h1>

}

export default Greet