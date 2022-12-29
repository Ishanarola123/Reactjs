import React, { Component } from 'react'

export class EventBind extends Component {
constructor(){
    super()
    this.state={
        message: "Hello"
    }
}
  clickhandler(){
    this.setState({
       message: "Good bye!"
    })
  }
  render() {
    return (
      <div>
    <div> {this.state.message} </div>
    {/* <button onClick={this.clickhandler.bind(this)}>click</button> */}
    <button onClick={()=> this.clickhandler()}>click</button>
    {/* <button onClick={this.clickhandler}>click</button> */} 
      </div>
    )
  }
}

export default EventBind
