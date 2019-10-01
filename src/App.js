import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import ViewScreen from './components/ViewScreen/ViewScreen'
import './App.css';


class App extends Component {
  state = {
    user: {
      name: 'Ana'
    }
  }
  render = () => 
    <div className="App">
      <ViewScreen userName={this.state.user.name} />
      <Navbar />
    </div>
}

export default App;
