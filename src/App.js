import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
  <h1 className="siteheader">{'Shopping Details'                                                                          }</h1>
     

   

     
     <div className="list">
     <img src="PICs\huwawei p30.jpg" className="img"/>
     <img src="PICs\redmi y3.jpg" className="img"/>
     <img src="PICs\samsung s10.jpg" className="img"/>
     </div>
    
    </div>
  );
}

export default App;
