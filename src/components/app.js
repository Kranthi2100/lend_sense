import React, { Component } from 'react';
import '../styles/app.css';
import GraphContainer from './graphContainer';
import ItemListContainer from './itemListContainer';
import Header from './header';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <GraphContainer />
        <ItemListContainer />
      </div>
    );
  }
}

export default App;
