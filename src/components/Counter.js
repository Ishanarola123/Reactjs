import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    Increment(){
        // this.state.count+=1
        
        this.setState({
            count:this.state.count+=1,
            
        },()=>{
            console.log('CallBack Value' ,this.state.count)
        })
    }

    IncrementFive(){
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
    }
  
  render() {
    return (
      <div>
        count is {this.state.count}
        <br/>
        <button onClick={()=>{
            this.IncrementFive()
        }}>Increment</button>
      </div>
    )
  }
}

export default Counter
