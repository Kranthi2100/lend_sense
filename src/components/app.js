import React, { Component } from 'react';
import '../styles/app.css';
import GraphContainer from './graphContainer';
import ItemListContainer from './itemListContainer';
class App extends Component {
  render() {
    return (
      <div className="app">
        <GraphContainer />
        <ItemListContainer />
      </div>
    );
  }
}

export default App;
