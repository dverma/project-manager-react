import React, { Component } from 'react';
import Projects from './components/Projects'
import logo from './logo.svg';
import './App.css';
import data from './data/data.json'

class App extends Component {
  constructor(){
    super();
    this.state = {projects : []};
  }

  componentWillMount(){
    this.setState(data);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Project Manager</h1>
        </div>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
