import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greethandler}>GreetParent</button>
      <br/>
      <button onClick={()=>{props.greethandler('child')}}>GreetParent</button>
    </div>
  )
}
