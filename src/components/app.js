import React, { Component } from 'react';
import '../styles/app.css';
import GraphContainer from './graphContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <GraphContainer />
      </div>
    );
  }
}

export default App;
