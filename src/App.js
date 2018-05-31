import React, { Component } from 'react';
import s from './App.css';
import ListContainer from './containers/ListContainer'

class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <header className={s["App-header"]}>
          <h1 className={s["App-title"]}>Welcome to React</h1>
        </header>
        <ListContainer/>
      </div>
    );
  }
}

export default App;
