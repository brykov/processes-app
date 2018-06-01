import React, {Component} from 'react';
import s from './App.css';
import ListContainer from './containers/ListContainer'

class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <h1 className={s.AppTitle}>Your processes</h1>
        <ListContainer/>
      </div>
    );
  }
}

export default App;
