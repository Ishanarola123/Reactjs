  import React, { Component } from 'react'

  export class Form extends Component {
    constructor(props) {
      super(props)

      this.state = {
        UserName: '',
        comments: '',
        topic :'React'
      }
    }
      UserNamechangeHandler = (e) => 
      { this.setState({ UserName: e.target.value })}

      commentchangeHandler = (e) => 
      { this.setState({ comments: e.target.value })}

    topicchangeHandler = (e) => 
      { this.setState({ topic: e.target.value })}
      
      handleform =(e)=>{
        alert(`Hello  ${this.state.UserName}! thank you for your comment that is ${this.state.comments} and thanks for selsecting your topic ${this.state.topic}`);
      }
      
    
  

    render() {
      return (
        <div>
          Hello !Enter the data in Registration Form is here!
          <div>
            <form onSubmit={this.handleform} >
              <label >
                UserName: <input type="text" value={this.state.UserName}
                  onChange= {this. UserNamechangeHandler}/>
              </label><br />

              <label>Comments</label>
              <textarea value={this.state.comments} onChange= {this.commentchangeHandler} > </textarea>

              <label>Topic</label>
              <select  value={this.state.topic} onChange= {this.topicchangeHandler}>
                <option value= "React">React</option>
                <option value= "Angular">Angular</option>
                <option value= "bootstrap">bootstrap</option>
              </select>
              <input type="submit"></input>
            
            </form>

            <div>
              Entered username Value: {this.state.UserName} <br></br>
              Entered comments Value: {this.state.comments} <br/>
              Entered topics Value: {this.state.topic} <br/>

            </div>


          </div>

        </div>
      )
    }
  }

  export default Form
