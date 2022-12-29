import React from 'react'
//function component
function FunctionClick() {
    function Clickhandler(){
        console.log("button is clicked!!")
    }
  return (
    <div>
      <button onClick={Clickhandler}>Click</button>
    </div>
  )
}

export default FunctionClick
