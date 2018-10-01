import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import SearchMode from '../functionality/SearchMode';

class Header extends Component {

  render() {
    const {history} = this.props;
    return(
      <div className="header">
        <div className="window">
          <div className="window-cover">
            <div className="container">
              <h1>Welcome To Houston Homes</h1>
              <SearchMode history={history} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
