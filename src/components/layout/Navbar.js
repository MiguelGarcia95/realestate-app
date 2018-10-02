import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.png';


class Navbar extends Component {
  onHamOpen = () => {
    const navbar = document.querySelector('.mobile-nav');
    navbar.classList.add('opened');
  }

  onHamClose = () => {
    const navbar = document.querySelector('.mobile-nav');
    navbar.classList.remove('opened');
  }

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="nav-logo">
            <Link to={process.env.PUBLIC_URL + '/'}>
              <img src={Logo} alt="Houston Homes"/>
            </Link>
          </div>
          <ul className="nav-section right">
            <li className="nav-item"><a onClick={this.onHamOpen}><i className="fas fa-2x fa-bars"></i></a></li>
          </ul>
        </div>
        <div className="mobile-nav">
          <div className="container">
            <div className="nav-logo">
              <Link onClick={this.onHamClose} to={process.env.PUBLIC_URL + '/'}>
                <img src={Logo} alt="Houston Homes"/>
              </Link>
            </div>
            <ul className="exit-nav right">
              <li className="close-nav"><a onClick={this.onHamClose}><i className="fas fa-2x fa-times-circle"></i></a></li>
            </ul>
            <ul className="nav-section mobile-section right">
              <li className="nav-item"><Link onClick={this.onHamClose} to={process.env.PUBLIC_URL + '/'}>Home</Link></li>
              <li className="nav-item"><Link onClick={this.onHamClose} to={process.env.PUBLIC_URL + '/listings'}>Properties</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Navbar;
