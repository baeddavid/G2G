import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import ViewScreen from './components/ViewScreen/ViewScreen'
import './App.css';


const App = () => {

  const [user, setUser] = useState({
    name: 'Ana'
  })
  
  return ( 
    <div className="App">
      <ViewScreen userName={user.name} />
      <Navbar />
    </div>
  )
}

export default App;
