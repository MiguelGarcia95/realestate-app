import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Properties from './components/pages/Properties';
import SingleProperty from './components/pages/SingleProperty';
import PropertyResults from './components/pages/PropertyResults';
import PropertyQuery from './components/pages/PropertyQuery';
import NotFound from './components/pages/NotFound';

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
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
              <Route exact path={process.env.PUBLIC_URL + '/listings'} component={Properties} />
              <Route exact path={process.env.PUBLIC_URL + '/property/:id'} component={SingleProperty} />
              {/* <Route exact path='/results/:type' component={PropertyResults} /> */}
              <Route exact path={process.env.PUBLIC_URL + '/search'} component={PropertyQuery} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
