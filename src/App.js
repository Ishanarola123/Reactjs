
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Classclick from './components/Classclick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import Usergreeting from './components/Usergreeting';
import UserList from './components/UserList';
import CarsList from './components/CarsList';
import Registration from './components/Registration';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import { Fragment } from 'react';
import Fragments from './components/Fragments';
import Navbari from './components/Navbari';
import Textform from './components/Textform';
import Aboutus from './components/Aboutus';
import React, { useState } from 'react';
import AlertDismiss from './components/AlertDismiss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  const [Mode, setmode] = useState('light');
  const [alert, SetAlert] = useState('');

  const padding = {
    padding: "20px"
  }

  const ShowAlert = (message, type) => {
    //this helps to show alert
    console.log(message);
    SetAlert({
      msg: message,
      type: type
    })
  }


  const togglemode = () => {
    if (Mode == 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light mode enabled!!", "success");
    }

    else {
      setmode('dark');
      document.body.style.backgroundColor = '#adb5bd';
      ShowAlert("Dark mode enabled!!", "success");
    }
  }


  return (
    <>

      {/* <Greet name="isha"/>
      
      <Welcome />

      <Hello />
 
      <Message /> */}
      {/* <Counter/> */}
      {/* <FunctionClick /> */}
      {/* <Classclick /> */}
      {/* <EventBind/> */}
      {/* <ParentComponent /> */}
      {/* <Usergreeting/> */}
      {/* <UserList/> */}
      {/* <CarsList/> */}
      {/* <Registration /> */}
      {/* <Form /> */}
      {/* <LifecycleA/> */}
      {/* <Fragments /> */}


      <Navbari title="Textutils" abouttext="AboutUtilities" mode={Mode} togglemode={togglemode} />
      <AlertDismiss alert={alert} />
      <div className='container ' style={padding}>

        {/* <Router>
          
            <Routes>
              <Route exact path="/" element={<Textform heading="Enter your Text Analyze" />} />
              <Route exact path="about" element={<Aboutus />} />

            </Routes>
       
        </Router> */}
        
      </div>
      <Textform heading="Enter your Text Analyze" />
      {/* <Aboutus/> */}
    </>
  )

}

export default App;
