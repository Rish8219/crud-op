import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
 
  return (
    <div>
      <h1>Student List</h1>
   <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
