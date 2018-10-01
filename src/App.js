import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Properties from './components/pages/Properties';
import SingleProperty from './components/pages/SingleProperty';
import PropertyResults from './components/pages/PropertyResults';
import PropertyQuery from './components/pages/PropertyQuery';

import store from './store';
import './style/css/style.css';

class App extends Component {
  // Made add a compare fucntionality, were you can pick up to 3 houses and compare them
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/listings' component={Properties} />
              <Route exact path='/property/:id' component={SingleProperty} />
              {/* <Route exact path='/results/:type' component={PropertyResults} /> */}
              <Route exact path='/search' component={PropertyQuery} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
