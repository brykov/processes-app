import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
import Process from './components/Process/Process';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import {createStore} from 'redux'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/process" component={Process}/>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
