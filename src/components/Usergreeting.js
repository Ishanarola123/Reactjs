import React, { Component } from 'react'
import Welcome from './Welcome'

export class Usergreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin : true
      }
    }
    
  render() {
    if(this.state.isLoggedin){
        return(
            <div>Welcome Isha !!</div>
        )
    }
    else{
        return(
            <div>Welcome Guest !!</div>
        )
    }
    // return (
    //   <div>
    //   <div>  welcome isha narola</div>
    //   <div>  welcome Guest</div>
      
    //   </div>
    // )
  }
}

export default Usergreeting
