import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputForm } from "./components/InputForm"

class App extends Component {
  state = {
    selectedRank: 1,
  };

  onEpisodeChange(rank) {
    this.setState({
      selectedRank: rank,
    });
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to not reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <InputForm
          onEpisodeChange={this.onEpisodeChange.bind(this)} />
        <p>{this.state.selectedRank}</p>
      </div>
    );
  }
}

export default App;
