import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      showHeader: false
    };
  }

  componentDidMount() {
    const delay = 750;
    const callback = () => {
      this.setState({
        showHeader: true
      });
    };
    setTimeout(callback, delay);
  }

  headerNode() {
    if (!this.state.showHeader) {
      return <div className="App-header--loading">Loading...</div>;
    }

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }

  render() {
    return (
      <div className="App">
        {this.headerNode()}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
