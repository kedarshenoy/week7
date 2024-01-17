import React, { useState } from 'react';
import Profile from "./Components/profile";
import Question2 from "./Components/Question2";
import Question3 from "./Components/Question3";
import Question4 from "./Components/Question4";
import Question5 from "./Components/Question5";
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Nav from './Components/navigate';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };
  // For Question 2 ^^^

  return (
    <div className="App" style={{ backgroundColor, height: '100vh', transition: 'background-color 0.5s ease' }}> 
       
        <BrowserRouter>
        <Routes>
        <Route
          path='/'
          Component={() =><Question2 change={changeBackgroundColor} />}
          />
          <Route
          path='/2'
          Component={() =><Question2 change={changeBackgroundColor} />}
          />
          <Route path='/1' Component={Profile}></Route>
          {/* <Route path='/Question2' Component={ ()=><Question2 change= 'changeBackgroundColor()' />}></Route> */}
          <Route path='/3' Component={Question3}></Route>
          <Route path='/4' Component={Question4}></Route>
          <Route path='/5' Component={Question5}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
