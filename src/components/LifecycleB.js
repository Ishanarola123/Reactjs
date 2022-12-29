import React, { Component } from 'react'
import { ReactDOM } from 'react';


export class LifecycleB extends Component {
  
   constructor(props) {
     super(props)
   
     this.state = {
       favoritecolor: "red"
     }
   }

   static getDerivedStateFromProps(props, state) {
       return null;
     }
   
  render() {
    return (
      <div>
        <h1>This is LifecycleB</h1>
       
       
      </div>
    )
  }
}



export default LifecycleB
