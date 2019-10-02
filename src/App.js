import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import ViewScreen from './components/ViewScreen/ViewScreen'
import './App.css';


const App = () => {

  const [user, setUser] = useState({
    name: 'Ana'
  })

  const [searchText, setSearchText] = useState('')

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  return ( 
    <div className="App">
      <ViewScreen 
        userName={user.name} 
        searchText={searchText} 
        handleChange={handleChange}
      />
      <Navbar />
    </div>
  )
}

export default App;
