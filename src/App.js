import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';
// import hom from './Home'; 


function App() {


  const First_val = "Welcome to RateMyDorm"
  return (
    
    <div >
      <div className='container'>
  
      </div>
      <Navbar />
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
