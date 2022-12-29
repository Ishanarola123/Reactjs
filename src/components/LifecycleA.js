 import React, { Component } from 'react'
 import { ReactDOM } from 'react';
 import LifecycleB from './LifecycleB';
 
 export class LifecycleA extends Component {
   
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
         <h1>This is LifecycleA</h1>
        
         {/* <h1>My Favorite Color is {this.state.favoritecolor}</h1> */}
         <LifecycleB/>
         
       </div>
     )
   }
 }


 
 export default LifecycleA
 