import React, { Component } from 'react'

export class Registration extends Component {
  render() {
    return (
      <div>
        <h1> Registration Form</h1>
        <form>
        {/* firstname  */}
          <label>Enter your Firstname:<input type="text" /></label> <br />

          {/* lastname  */}
          <label>Enter your Lastname:<input type="text" /></label><br />

          {/* email  */}
          <label>Enter your Email:<input type="email" /></label><br />

          {/* password  */}
          <label>Enter your Password:<input type="password" /></label><br />

          {/* dob  */}
          <label>Enter your DOB:
            <input type="date" id="start" name="trip-start"
              value="2018-07-22"
              min="2018-01-01" max="2018-12-31"></input></label><br />

              {/* phonenumber  */}
          <label>Enter your PhoneNumber:<input type="tel" id="phone" name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required></input></label><br />

           {/* gender  */}
          <label>Enter your Gender:<input type="text" /></label><br />
          <label>Enter your Role:<input type="text" /></label><br />
          <label>Enter your Website:<input type="url" name="url" id="url"
            placeholder="https://example.com"
            pattern="https://.*" size="30"
            required></input></label><br />
          <label>Enter your Profilephoto:<input type="file"
            id="profilephoto" name="profilephoto"
            accept="image/png, image/jpeg"></input></label><br />
          <label>Enter your Country:<input type="text" /></label><br />
          <label>Enter your state:<input type="text" /></label><br />
          <label>Enter your City:<input type="text" /></label><br />
          <label>Enter your Zipcode:<input type="text" /></label><br />
          <label>Enter your Address:<input type="textarea" /></label><br />
        </form>
      </div>
    )
  }
}

export default Registration
