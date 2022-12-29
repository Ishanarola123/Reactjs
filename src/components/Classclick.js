import React, { Component } from 'react'

export class Classclick extends Component {
    clickhandler(){
        console.log("Button is clicked!");
    }
  render() {
    return (
      <div>
       <button onClick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default Classclick
