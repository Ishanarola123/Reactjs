import React from "react";

const Hello=()=>{
    return(
        // <div>
        //     <h1>Hello I am Isha Narola!</h1>
        // </div>
        React.createElement('div',{id:'hello'}, 
        React.createElement('h1',null,"Hello Isha"))
    )
}

export default Hello